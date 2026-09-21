---
title: Introduction
---

Orderium has a GUI system to make interactions with orders easy for your players.

# GUI Types

There are a few types of GUIs in this system. This section covers all of them and provides examples of how they look.

## Container

This is the most common GUI type in the plugin, and probably also is the most well-known one in the community.

In Minecraft, a container GUI consists of:

- Title: A text component at the top of the GUI;
- Size: A number determining the amount of slots in the GUI. This number must be a multiple of 9, between 9 and 54 (inclusive);
- Slots: A list of items.

For Orderium,

- "size" is also known as "rows", which is a number between 1 and 6 (inclusive) determining the amount of rows in the container. Conversion: `size = rows * 9`.
- A "slot" is also known as "button", which is an item like a normal slot, but it can perform certain actions upon clicking or have data dependent on the context of the GUI.

