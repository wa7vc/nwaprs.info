import faq from "./faq.json" with { type: "json" };

export default [...new Set(faq.map((item) => item.category))];
