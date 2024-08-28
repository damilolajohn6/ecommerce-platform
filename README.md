# E-commerce Product Listing Platform

## Overview

The E-commerce Product Listing Platform is a web application designed to display and manage product listings. Built using Next.js, TypeScript, and Tailwind CSS, this platform provides features such as product listing, detailed product views, and filtering options by price and category. It is designed to be performant, SEO-compliant, and easy to use, providing a modern and responsive interface for users.

## Features

- Product Listing: Display a grid of products with images, names, categories, and prices.
- Product Details: View detailed information about individual products.
- SEO Optimization: Enhanced SEO handling for better visibility on search engines.

## Setup and Running Locally

To set up and run the project locally, follow these steps:

### Prerequisites

- Node.js (v14 or later)
- npm (or yarn)

### Clone the Repository

```bash
git clone https://github.com/damilolajohn6/ecommerce-platform.git
cd ecommerce-platform
```

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Configure Environment Variables

Create a `.env.local` file in the root of the project and add the following variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=your_sanity_dataset
NEXT_PUBLIC_SANITY_API_VERSION=2023-01-01
```

Replace `your_sanity_project_id`, `your_sanity_dataset`, and `2023-01-01` with your Sanity project details.

### Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Design Decisions, Optimizations, and Trade-offs

- Next.js: Chosen for its server-side rendering (SSR) capabilities, which enhances performance and SEO.
- TypeScript: Used for type safety, making the codebase more robust and easier to maintain.
- Tailwind CSS: Selected for its utility-first approach to styling, which speeds up the development process and ensures a consistent design.
- Sanity.io: A headless CMS used for content management, allowing easy updates and scaling of content without deploying code changes.
- Shadcn UI: Utilized for modern and responsive design elements, enhancing user experience.
- SEO Optimization: Implemented meta tags, structured data, and optimized image loading to improve search engine ranking and page load times.
- Filtering and Sorting: Implemented client-side filtering for performance reasons, but consider server-side solutions for larger datasets.

## SEO Handling

To enhance SEO for this project:

- Meta Tags: Used `<Head>` component from Next.js to include relevant meta tags for each page, including title, description, and viewport settings.
- Structured Data: Incorporated JSON-LD for structured data to help search engines understand the content better.
- Image Optimization: Utilized the Next.js `Image` component for automatic image optimization and lazy loading.
- Semantic HTML: Ensured the use of semantic HTML elements to improve the accessibility and SEO of the site.

For a more comprehensive approach to SEO, consider adding an SEO configuration component that dynamically generates meta tags based on page content.
