import { format } from 'date-fns';

export const dummyData = {
  content: ' <figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/0*iaSDZoEkSYOX20uz"><figcaption>Photo by <a href="https://unsplash.com/@umeshsonii?utm_source=medium&amp;utm_medium=referral">Umesh Soni</a> on <a href="https://unsplash.com/?utm_source=medium&amp;utm_medium=referral">Unsplash</a></figcaption></figure><p>Hello [insert engineer name], and welcome to the React Development Enrichment Center. Please respond in the affirmative if you’ve you ever experienced the following:</p> <ul> <li>Installed an entire bloated component library just to implement a simple modal</li> <li>Created a tooltip system entirely from CSS that you were embarrassed to deploy</li> <li>Cried to the point of exhaustion over the implications of state management for a pop-up form nested deeply within your application</li> </ul> <p>If any of the above scenarios triggered an intense reaction of PTSD in your brain, you’re in luck. In the following test chamber you will be introduced to <strong>portals</strong>, a simple and effective tool for your React repertoire that will no doubt leave you jumping for joy the next time a frontend ticket comes your way.</p> <p>Do be sure to proceed all the way to the end of the test chamber. There will be cake.</p> <p><em>Author’s Note: Okay no more dated Portal references, I promise.</em></p> <h3>What Are React Portals?</h3> <p>Portals are an incredibly useful feature in React that allow developers to easily render child components to the DOM somewhere outside of their immediate parent tree. When used correctly, they’re an excellent tool for simplifying certain components that tend to be otherwise messy or obtuse in their implementations within the context of React.</p> <p>Modals, tooltips, and other “pop-up” style features are common use cases for portals. These types of floating components are often classic pain points for React developers, as managing the required state across sometimes several nested components on the DOM tree can be a struggle, and tying down the component specifically to the parent that’s controlling its state and properties is often less than ideal.</p>',
  title: 'Now You’re Thinking With (React) Portals',
  image: 'https://cdn-images-1.medium.com/max/1024/0*iaSDZoEkSYOX20uz',
  date: format(new Date('2022-03-21 23:11:27'), 'M/d/y'),
  url: 'https://zachkaigler.medium.com/now-youre-thinking-with-react-portals-c1c74c9962d9?source=rss-f7a1298fb940------2',
  categories: [
    'react',
    'react-portal',
    'react-hook',
    'react-context',
  ],
};
