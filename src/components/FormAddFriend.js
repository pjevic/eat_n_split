/** @format */
import { useState } from "react";

import Button from "./Button";

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function hanldeSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form onSubmit={hanldeSubmit} className="form-add-friend">
      <label>👫🏻 Frined name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} type="text" />

      <label>🌄 Image URL</label>
      <input value={image} onChange={(e) => setImage(e.target.value)} type="text" />

      <Button>Add</Button>
    </form>
  );
}
