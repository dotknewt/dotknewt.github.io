// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-books",
          title: "books",
          description: "books I&#39;ve read",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "dropdown-news",
              title: "news",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-projects",
              title: "projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-parenting",
      
        title: "parenting",
      
      description: "the rollercoaster",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/parenting/";
        
      },
    },{id: "post-adulting",
      
        title: "adulting",
      
      description: "february 1st, carwash scratched up our car and I think I&#39;m getting old..?",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/adulting/";
        
      },
    },{id: "news-wave-hello-earth-africa",
          title: ':wave: hello :earth_africa:',
          description: "",
          section: "News",},{id: "news-malspam-analysis-workshop",
          title: 'malspam analysis workshop',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/malspam-analysis-workshop/";
            },},{id: "news-going-to-hackcon-20",
          title: 'Going to HackCon #20',
          description: "",
          section: "News",},{id: "news-wish-me-luck",
          title: 'Wish me luck',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/drivers-license/";
            },},{id: "projects-ludus",
          title: 'Ludus',
          description: "The easiest way to deploy dev/test infrastructure",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ludus/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/dotknewt", "_blank");
        },
      },{
        id: 'social-gitlab',
        title: 'GitLab',
        section: 'Socials',
        handler: () => {
          window.open("https://gitlab.com/dotknewt", "_blank");
        },
      },{
        id: 'social-mastodon',
        title: 'Mastodon',
        section: 'Socials',
        handler: () => {
          window.open("https://infosec.exchange/@dodgybadger", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://app.thestorygraph.com/profile/dotknewt", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
