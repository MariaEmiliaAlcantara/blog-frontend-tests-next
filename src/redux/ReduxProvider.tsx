"use client"

import { Provider } from "react-redux"
import React from "react"
import { store } from "./store"

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>{children}</Provider>
)
