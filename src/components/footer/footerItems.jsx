import Href from "../header/href";

const FooterItems = ({ item }) => {

  const getHref = (value = "") => {
    if (!value) return "#";

    if (value.includes("@")) {
      return `mailto:${value}`;
    }

    if (/^\+?\d/.test(value)) {
      return `tel:${value}`;
    }

    return value;
  };

  return (
    <div>
      <strong>{item.name}</strong>

      {item.icons?.length > 0 && (
        <div className="flex gap-[15px] mt-[22px]">
          {item.icons.map((icon) => {
            const IconComponent = icon.icon;

            return (
              <a key={icon.id} href={icon.link}>
                {IconComponent && <IconComponent />}
              </a>
            );
          })}
        </div>
      )}

      {item.hrefs?.length > 0 && (
        <ul className="mt-[16px] flex flex-col gap-[12px]">
          {item.hrefs.map((href) => (
            <li key={href.id}>
              <Href
                href={getHref(href.link || href.name)}
                style={`hover:text-[#000000] hover:underline text-[#555555]`}
              >
                {href.name}
              </Href>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FooterItems;
