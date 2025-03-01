---
category: Components
title: Button
subtitle: 按钮
description: 按钮用于开始一个即时操作。
demo:
  cols: 2
group:
  title: web 网页元素
  order: 2
---

# Button 组件

`Button` 组件是一个自定义的 `React` 按钮组件，它提供了丰富的可定制属性，允许你根据不同的需求创建各种样式和功能的按钮。

## 通用属性

`primary`、`secondary`、`danger`、`success`、`warning`、`info`、`light`、`dark` 为 `Button` 的通用属性

## 1. type

**介绍**：用于设置按钮的主题类型，决定了按钮的颜色风格。可选值参考上述 通用属性。

## 2. outlineColor

**介绍**：

`outlineColor` 属性用于设定按钮轮廓（边框）的颜色主题类型，其可选值与 `type` 属性相同，详情见 通用属性

## 3. round

**介绍**：

`round` 属性是一个布尔值类型的属性，用于控制按钮是否呈现明显的圆角效果。当将其设置为 `true` 时，按钮的四个角会变成圆润的形状，类似于 `Bootstrap` 中的 `rounded-pill`。
<code src='./demo/round.tsx'>效果示例</code>

## 6. textColor

**介绍**：

用于设置按钮文本的颜色主题类型，可选值与 `type` 属性相同。它可以独立于按钮本身的颜色（由 `type` 属性决定）来设置文本颜色，以实现更灵活的样式搭配。

**效果示例**：

## 7. loading

**介绍**：

布尔值属性，当设置为 `true` 时，按钮会显示加载状态的图标，同时按钮会被禁用，防止用户在加载过程中进行多次点击操作。并且可以传入 `spinerType` 和 `spinerColor` 属性来设置加载图标的类型和颜色。

**效果示例**：

## 属性

| 属性名         | 类型     | 可选值                          | 描述                                                 |
| -------------- | -------- | ------------------------------- | ---------------------------------------------------- |
| `type`         | string   | 上述已提到、`dark`              | 设置按钮主题类型，决定颜色风格。                     |
| `size`         | string   | `sm`、`md`、`lg`                | 设置按钮大小。`sm`小，`md`中，`lg`大。               |
| `round`        | boolean  | `true`、`false`                 | 为 `true` 时按钮呈明显圆角效果，`false` 为直角样式。 |
| `textColor`    | string   | 上述已提到、`dark`              | 设置按钮文本颜色主题类型。                           |
| `outlineColor` | string   | 上述已提到、`dark`              | 设置按钮轮廓颜色主题类型。                           |
| `disabled`     | boolean  | `true`、`false`                 | 设置按钮是否禁用。                                   |
| `loading`      | boolean  | `true`、`false`                 | 为 `true` 时按钮显示加载图标并禁用。                 |
| `prefixIcon`   | string   | 具体图标类名（取决于图标库）    | 在按钮文本前添加图标。                               |
| `suffixIcon`   | string   | 具体图标类名（取决于图标库）    | 在按钮文本后添加图标。                               |
| `spinerType`   | string   | `border`、`grow`                | 设置加载图标类型，默认为 `border`。                  |
| `spinerColor`  | string   | 上述已提到、`dark`              | 设置加载图标颜色。                                   |
| `fontSize`     | string   | 自定义字体大小值（如 `14px`等） | 设置按钮文本字体大小。                               |
| `onClickOK`    | function | -                               | 按钮点击事件回调函数。                               |
