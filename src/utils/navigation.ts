import settings from "@/settings";
import router, { Router } from "@/router";

// const navigationTemplate = [
//   {
//     path: "/",
//     name: "index",
//     children: [],
//   },
//   {
//     path: "/introduction",
//     name: "1.introduction",
//     children: [
//       {
//         path: "/getting-started",
//         name: "1.getting-started",
//       },
//       {
//         path: "/installation",
//         name: "2.installation",
//       },
//     ],
//   },
//   {
//     path: "/components",
//     name: "2.components",
//     children: [
//       {
//         path: "/button",
//         name: "1.button",
//       },
//     ],
//   },
// ];

// export interface Navigation {
//   url: string;
//   path: Array<any>;
//   title: string;
//   parent?: string;
//   children?: Navigation[];
// }

// /*
//  * This function fetches all files in the src/pages directory
//  */
// const fetchFiles = (): Object => {
//   return import.meta.glob(
//     ["/src/pages/**/*.md", "/src/pages/**/*.mdx", "/src/pages/**/*.astro"],
//     { eager: true }
//   );
// };

// /*
//  * This function parses the files and returns an array of navigation objects
//  */
// const parseFiles = (files: Object): Navigation[] => {
//   console.log(files);
//   const navigationTemplate: any = [];

//   // Iterate over each page in the original JSON object
//   for (const page in files) {
//     const parts = page.split("/").slice(3); // Get the relevant parts of the URL
//     let currentLevel = navigationTemplate; // Start at the top level of the navigation template
//     let path = "";

//     // Iterate over each part of the URL, creating nested levels as needed
//     for (let i = 0; i < parts.length; i++) {
//       const name = parts[i].replace(/\d+\./, ""); // Get the name of the current part, removing any leading numbers
//       path += `/${parts[i]}`; // Build the path to the current part

//       // Check if the current level already has a child with the current name
//       let child = currentLevel.find((item: any) => item.name === name);

//       // If not, create a new child and add it to the current level
//       if (!child) {
//         child = {
//           path: path
//             .replace(".mdx", "")
//             .replace(".md", "")
//             .replace(".astro", ""),
//           name: name.split(".")[0].split("-").join(" "),
//           children: [],
//         };
//         currentLevel.push(child);
//       }

//       // Set the current level to the new child, to continue building the nested structure
//       currentLevel = child.children;
//     }
//   }

//   return navigationTemplate;
// };

// const files: Object = fetchFiles();
// const folders: Navigation[] = parseFiles(files);

let navigation: Router[] = [];

if (settings.navigation === "router") {
  navigation = router;
} else {
  // navigation = folders;
}

export default navigation;
