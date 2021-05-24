import React from "react";
import { Input } from "@mantine/core";

export default function Mantine() {
  return (
    <div>
      <Input component="select">
        <option value="1">1</option>
        <option value="2">2</option>
      </Input>
    </div>
  );
}
