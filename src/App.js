/** @format */

import { useState } from "react";

import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleToggle() {
    setShowFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    handleToggle();
  }

  function handleSelectFriend(friend) {
    setSelectedFriend((selected) => (selected?.id === friend.id ? null : friend));
    setShowFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelectedFriend={handleSelectFriend}
          selectedFriend={selectedFriend}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleToggle}>{showAddFriend ? "Close" : "Add Friend"}</Button>
      </div>

      {selectedFriend && (
        <FormSplitBill friends={friends} selectedFriend={selectedFriend} />
      )}
    </div>
  );
}
