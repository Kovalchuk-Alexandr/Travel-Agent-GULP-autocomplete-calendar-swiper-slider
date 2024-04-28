// Кастомный календарь easepick
import { easepick, TimePlugin } from "@easepick/bundle";
// import { TimePlugin } from "@easepick/time-plugin";

function calendar() {
    // Кастомный календарь easepick
    const picker = new easepick.create({
        element: document.getElementById("datePicker"),
        css: [
            "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css",
            // "https://cdn.jsdelivr.net/npm/@easepick/time-plugin@1.2.1/dist/index.css",
            "./../css/easepick-custom.css",
        ],
        zIndex: 10,
        format: "DD/MM/YYYY HH:mm",
        plugins: [TimePlugin],
        TimePlugin: {
            format: "HH:mm",
        },
    });
}

export default calendar;