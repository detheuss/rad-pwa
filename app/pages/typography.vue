<template>
  <div class="w-full max-w-prose text-left p-5">
    <h1>Heading One</h1>
    <p>
      This is a paragraph to preview base typography styles. It should show
      comfortable line-height and top margins between blocks.
    </p>

    <h2>Heading Two</h2>
    <p>
      Another paragraph following an h2. Includes <strong>bold</strong>,
      <em>italic</em>, and a
      <a href="https://example.com" target="_blank" rel="noopener noreferrer"
        >link</a
      >.
    </p>

    <h3>Heading Three</h3>
    <p>
      Short paragraph under an h3. The spacing above this paragraph should be
      set by the base layer utilities.
    </p>

    <h4>Heading Four</h4>
    <p>
      Final paragraph under an h4 to check smaller heading sizes and spacing.
    </p>

    <blockquote>
      Typography is the craft of endowing human language with a durable visual
      form. — Robert Bringhurst
    </blockquote>

    <h3>Unordered List</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </p>
    <ul>
      <li>First unordered item</li>
      <li>
        Second unordered item with a nested list
        <ul>
          <li>
            Nested item one — Ut enim ad minim veniam, quis nostrud exercitation
            ullamco.
          </li>
          <li>
            Nested item two — Duis aute irure dolor in reprehenderit in
            voluptate velit esse.
          </li>
        </ul>
      </li>
      <li>
        Third unordered item — Excepteur sint occaecat cupidatat non proident.
      </li>
    </ul>

    <h3>Ordered List</h3>
    <ol>
      <li>First ordered item</li>
      <li>Second ordered item</li>
      <li>Third ordered item</li>
    </ol>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
