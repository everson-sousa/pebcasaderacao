"use client";
import { useEffect, useState } from "react";

export default function TestimonialsList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/testimonials/list")
      .then((res) => res.json())
      .then((json) => setItems(json.data));
  }, []);

  return (
    <div className="flex flex-col gap-4 mt-6">
      {items.map((t: any) => (
        <div key={t.id} className="border p-4 rounded shadow">
          <div className="text-xl font-bold">{t.initials}</div>
          <p>{t.testimonial}</p>
          <small className="text-gray-500">{t.name}</small>
        </div>
      ))}
    </div>
  );
}
