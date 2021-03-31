import React from "react";

export interface TestComponentProps {
  name: string;
}

export function TestComponent({ name }: TestComponentProps) {
  return <h1>Hello World, {name}, seu batata</h1>
}