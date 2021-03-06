import http from "./http"

export default async function listForums() {
  const $ = await http.document("");
  return $(".timeline-room .submenu-room-list .submenu-room-item > a")
    .map((i, ele) => ({
      title: $(ele)
        .find(".title")
        .text(),
        href: $(ele).attr('href')
    }))
    .get();
};
