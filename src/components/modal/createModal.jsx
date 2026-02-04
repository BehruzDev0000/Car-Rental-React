import { useContext, useState } from "react";
import { Context } from "../../context/Context";

const CreateModal = ({ onCancel = () => {}, onCreate = () => {} }) => {
  const { cars, categories } = useContext(Context);

  const nextId =
    cars.length > 0 ? Math.max(...cars.map((c) => c.id)) + 1 : 1;

  const [form, setForm] = useState({
    categoryId: categories[0]?.id || 1,
    title: "",
    type: "",
    seats: "",
    transmission: "",
    age: "",
    fuel: "",
    image: "",
  });

  const [error, setError] = useState("");

  const update = (key) => (e) => {
    setForm((p) => ({
      ...p,
      [key]:
        key === "categoryId" || key === "seats"
          ? Number(e.target.value)
          : e.target.value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    setError("");

    if (Object.values(form).some((v) => v === "")) {
      return setError("Please fill all fields");
    }

    onCreate({
      id: nextId,
      categoryId: form.categoryId,
      title: form.title.trim(),
      type: form.type.trim(),
      seats: Number(form.seats),
      transmission: form.transmission.trim(),
      age: form.age.trim(),
      fuel: form.fuel.trim(),
      image: form.image.trim(),
    });
  };

  return (
    <form onSubmit={submit} className="w-full">

      <h2 className="text-2xl font-semibold text-center mb-6">
        Create new car
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <div className="col-span-2">
          <label className="text-sm font-medium text-gray-600">Category</label>
          <select
            value={form.categoryId}
            onChange={update("categoryId")}
            className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-2">
          <label className="text-sm font-medium text-gray-600">Title</label>
          <input
            value={form.title}
            onChange={update("title")}
            placeholder="Ford Fiesta"
            className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none"
          />
        </div>

        <div className="col-span-2">
          <label className="text-sm font-medium text-gray-600">Type</label>
          <input
            value={form.type}
            onChange={update("type")}
            placeholder="Economy Car"
            className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">Seats</label>
          <input
            type="number"
            min={1}
            value={form.seats}
            onChange={update("seats")}
            className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">
            Transmission
          </label>
          <input
            value={form.transmission}
            onChange={update("transmission")}
            placeholder="Automatic"
            className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">Age</label>
          <input
            value={form.age}
            onChange={update("age")}
            placeholder="21+ Years"
            className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">Fuel</label>
          <input
            value={form.fuel}
            onChange={update("fuel")}
            placeholder="1.1t / 2.5 km"
            className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none"
          />
        </div>

        <div className="col-span-2">
          <label className="text-sm font-medium text-gray-600">
            Image URL
          </label>
          <input
            value={form.image}
            onChange={update("image")}
            placeholder="https://example.com/car.png"
            className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none"
          />
        </div>
      </div>

      {error && (
        <div className="mt-4 text-center text-red-600 text-sm font-medium">
          {error}
        </div>
      )}

      <div className="mt-6 flex justify-center gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2 rounded-xl border border-gray-300 bg-gray-100 hover:bg-gray-200 transition"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-6 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 transition"
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default CreateModal;
