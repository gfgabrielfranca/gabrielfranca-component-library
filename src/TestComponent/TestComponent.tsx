import React from "react";

import { TestComponentProps } from "./TestComponent.types";

export function TestComponent({ name }: TestComponentProps) {
  return <h1>Hello World, {name}</h1>
}