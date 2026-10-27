# Human-Centered AI Project - Data Centers in the Lehigh Valley
### lehighvalley-datacenter

## Website outline

5 pages reachable from the tabs at the top.

**Header (every page)**
- Project title and tagline (links back to the home page)
- English / Spanish language switch 
- Navigation tabs for the five pages

**1. What's happening** (`/`, landing page)
- Project title, short blurb about the proghect
- Documentary - placeholder for video
- Photos and videos - placeholder grid
- Timeline - color-coded vertical timeline of local regulations, developments, and community actions 
- Data centers explained - Q&A covering the basics of data centers 

**2. Potential impacts** (`/impacts`)
- Page introduction
- Side menu that jumps to each topic
- Topics - electricity and the power grid; water use; land, zoning, and neighborhoods; jobs, taxes, and the local economy; noise, air, and the environment
- Each topic has a summary, key facts, and sources

**3. Community response** (`/community`)
- Page introduction
- Quotes from interviews
- Interview clips - video placeholders
- How to get involved - public meetings, contacting city council, local groups
- Resources - list of articles, city documents, reports, and videos

**4. Human-centered AI** (`/human-centered-ai`)
- Page introduction
- Sections - physical side of AI, engagement, empathy, ethics
- What we've learned - team reflection

**5. About us** (`/about`)
- Page introduction
- The team - headshot, name, role, and short bio for each member
- Summary of the project
- Thank you and contact email for any questions

**Footer (every page)**
- Project title and tagline
- Team member names
- Lehigh University, course title, and semester

---

## Running the site locally

Node.js version 18 or newer (run `node -v` in a terminal)

1. Open a terminal in the project folder.
2. Install the dependencies (first time only, or after someone adds a new package):

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the link it prints, usually http://localhost:5173. The page reloads automatically when you save a file.
5. Press `Ctrl + C` in the terminal to stop the server.

To test the production version before deploying:

```bash
npm run build     # creates the finished site in the dist/ folder
npm run preview   # serves that finished version locally
```

If `npm run build` shows an error, Vercel's deploy will fail the same way, so it's a good check before pushing.

---

## Deploying on Vercel

### First-time setup (only need one persont to do this ...)

1. Make sure the project is pushed to GitHub.
2. Go to [vercel.com](https://vercel.com) and sign up or log in with your GitHub account.
3. Click **Add New...** and choose **Project**.
4. Find the repository and click **Import**. If it isn't listed, click **Adjust GitHub App Permissions** and give Vercel access to the repo.
5. Check the settings. Vercel should detect Vite on its own:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
6. Click **Deploy**. After about a minute you'll get a live link like `your-project.vercel.app`.

### Updating the live site

You don't need to do anything in Vercel after the first setup.

- Every push to the `main` branch redeploys the live site automatically.
- Pushes to other branches and pull requests get their own preview links, so teammates can check changes before they go live.
- To see the status of a deploy or find preview links, open the project on vercel.com and go to the **Deployments** tab.

### Adding teammates

On Vercel's free plan, only the account owner can manage the project. Teammates don't need Vercel accounts. As long as they can push to the GitHub repo, their changes deploy automatically.

### Troubleshooting

- **A page shows a 404 when refreshed or opened directly (like `/impacts`):** make sure `vercel.json` is in the root of the project. It sends every link to the app so the tabs work.
- **The build fails on Vercel but works on your computer:** check file name capitalization. Vercel is case-sensitive, so `Header.jsx` and `header.jsx` are different files there. The error log in the **Deployments** tab shows which file it couldn't find.
- **Changes aren't showing up:** confirm the push reached the `main` branch on GitHub, then hard-refresh the browser (`Ctrl + Shift + R`, or `Cmd + Shift + R` on Mac).

### Custom domain (optional)

In the Vercel project, go to **Settings** and then **Domains**, add your domain, and follow the DNS instructions it shows.