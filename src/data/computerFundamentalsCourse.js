const SUBJECT = "Computer Fundamentals";

const courseGroups = [
  {
    slug: "hardware-basics",
    title: "Hardware Basics",
    order: 1,
    description: "Learn the physical parts of a computer and how input, processing, storage, output, and connections work together.",
    lessons: [
      {
        slug: "computer-hardware-overview",
        title: "Computer Hardware Overview",
        description: "Understand the main physical parts inside and outside a computer.",
        estimatedMinutes: 12,
        sections: [
          {
            heading: "What Hardware Means",
            body: [
              "Hardware means the physical parts of a computer system. If you can touch it, it is hardware.",
              "A computer needs hardware and software together. Software gives instructions, while hardware carries out the work."
            ],
            bullets: ["Keyboard and mouse send input.", "The CPU processes instructions.", "RAM holds active work.", "Storage keeps saved files.", "The monitor, speakers, and printer produce output."]
          },
          {
            heading: "Internal And External Parts",
            body: [
              "Internal parts include the motherboard, CPU, RAM, storage drive, power supply, and cooling system.",
              "External parts include the monitor, keyboard, mouse, printer, speakers, webcam, and other connected devices."
            ],
            bullets: ["The motherboard connects major parts.", "The power supply provides usable electricity.", "Cooling keeps components at safer temperatures."]
          }
        ],
        summary: ["Hardware is the physical part of a computer.", "Internal parts handle processing, memory, storage, power, and cooling.", "External devices help users provide input and receive output."],
        quiz: [
          ["What does computer hardware mean?", ["Physical parts of a computer", "Only mobile apps", "A web address", "A password rule"], 0, "Hardware is physical."],
          ["Which part is the main circuit board?", ["Motherboard", "Browser", "Folder", "Printer paper"], 0, "The motherboard connects major parts."],
          ["Which item is software, not hardware?", ["Web browser", "Mouse", "SSD", "Speaker"], 0, "A browser is a program."],
          ["What does the power supply do?", ["Converts electricity for computer parts", "Stores photos", "Opens web pages", "Displays pixels"], 0, "The power supply provides usable power."],
          ["Why does a computer need cooling?", ["To remove heat from components", "To create passwords", "To replace storage", "To improve spelling"], 0, "Cooling manages heat."]
        ]
      },
      {
        slug: "input-output-and-ports",
        title: "Input, Output, And Ports",
        description: "Learn how devices send data in, show results, and connect through ports.",
        estimatedMinutes: 13,
        sections: [
          {
            heading: "Input And Output",
            body: [
              "Input devices send data or commands into the computer. Output devices present results from the computer.",
              "Some devices can do both jobs. A touchscreen shows information and also receives touch input."
            ],
            bullets: ["Keyboard, mouse, microphone, scanner, and webcam are input devices.", "Monitor, speaker, printer, and projector are output devices.", "Touchscreens are both input and output."]
          },
          {
            heading: "Ports And Connections",
            body: [
              "Ports let external devices connect to the computer. Common ports include USB, HDMI, Ethernet, and audio ports.",
              "Wireless connections such as Wi-Fi and Bluetooth also let devices communicate without a physical cable."
            ],
            bullets: ["USB connects many accessories.", "HDMI carries video and audio to displays.", "Ethernet connects a device to a wired network."]
          }
        ],
        summary: ["Input devices send data into a computer.", "Output devices show or produce results.", "Ports and wireless connections let devices communicate."],
        quiz: [
          ["Which device is mainly used for input?", ["Keyboard", "Monitor", "Speaker", "Projector"], 0, "A keyboard sends data into the computer."],
          ["Which device is mainly used for output?", ["Monitor", "Mouse", "Webcam", "Scanner"], 0, "A monitor displays results."],
          ["Which device can be both input and output?", ["Touchscreen", "Printer", "Speaker", "Power cable"], 0, "A touchscreen displays and receives touch."],
          ["Which connection commonly sends video and audio to a display?", ["HDMI", "RAM", "DNS", "CPU"], 0, "HDMI carries display signals."],
          ["Which connection is commonly used for wired networking?", ["Ethernet", "Bluetooth only", "Audio jack", "Power button"], 0, "Ethernet connects wired network devices."]
        ]
      }
    ]
  },
  {
    slug: "cpu",
    title: "CPU",
    order: 2,
    description: "Learn what the processor does, how instructions run, and why cores, clock speed, cache, and cooling affect performance.",
    lessons: [
      {
        slug: "instructions-and-cores",
        title: "CPU Instructions And Cores",
        description: "Understand how a CPU runs instructions and why cores help with multitasking.",
        estimatedMinutes: 13,
        sections: [
          {
            heading: "What The CPU Does",
            body: [
              "CPU stands for Central Processing Unit. It is the main processor that runs instructions from programs.",
              "The CPU repeatedly fetches instructions, decodes what they mean, and executes them very quickly."
            ],
            bullets: ["Programs are made of instructions.", "The CPU works closely with RAM.", "The CPU coordinates many actions across the system."]
          },
          {
            heading: "Cores And Multitasking",
            body: [
              "A CPU core is a processing unit inside the CPU. Modern CPUs usually have multiple cores.",
              "More cores can help with multitasking and parallel work, but a program must be designed to use them well."
            ],
            bullets: ["A 4-core CPU can work on several tasks more easily than a single-core CPU.", "More cores do not automatically make every single task faster."]
          }
        ],
        summary: ["CPU means Central Processing Unit.", "The CPU runs program instructions.", "Cores help with multitasking when software can use them."],
        quiz: [
          ["What does CPU stand for?", ["Central Processing Unit", "Computer Power Utility", "Control Program User", "Core Printer Unit"], 0, "CPU means Central Processing Unit."],
          ["What is the CPU's main job?", ["Run instructions", "Store all photos permanently", "Print documents", "Display only colors"], 0, "The CPU processes instructions."],
          ["What does a CPU core help with?", ["Processing work", "Increasing screen brightness only", "Holding files after shutdown", "Changing Wi-Fi names"], 0, "A core performs processing work."],
          ["Why does more cores not always make every task faster?", ["Some programs cannot use many cores well", "Cores only store pictures", "Cores disable RAM", "Cores work only offline"], 0, "Software must use cores effectively."],
          ["Which part does the CPU commonly read active data from?", ["RAM", "Printer paper", "Monitor glass", "Power cable"], 0, "The CPU works closely with RAM."]
        ]
      },
      {
        slug: "speed-cache-and-performance",
        title: "Clock Speed, Cache, And Performance",
        description: "Learn why CPU performance depends on more than one number.",
        estimatedMinutes: 14,
        sections: [
          {
            heading: "Clock Speed",
            body: [
              "Clock speed is often measured in gigahertz, written as GHz. It gives a rough idea of CPU cycles per second.",
              "Clock speed matters, but it is not the only performance factor."
            ],
            bullets: ["CPU design affects performance.", "Power limits and cooling affect sustained speed.", "Different tasks stress the CPU in different ways."]
          },
          {
            heading: "Cache And Balance",
            body: [
              "CPU cache is very fast memory close to the processor. It stores frequently used data so the CPU waits less.",
              "A balanced computer also needs enough RAM, fast storage, good cooling, and efficient software."
            ],
            bullets: ["Cache is faster than regular RAM but much smaller.", "A fast CPU can still feel slow if the rest of the system is weak."]
          }
        ],
        summary: ["Clock speed is measured in GHz.", "CPU cache helps reduce waiting.", "Overall performance depends on CPU, RAM, storage, cooling, and software."],
        quiz: [
          ["What is clock speed commonly measured in?", ["GHz", "GB", "TB", "URL"], 0, "Clock speed is often measured in gigahertz."],
          ["Which statement about clock speed is most accurate?", ["It is one performance factor", "It is the only thing that matters", "It measures storage size", "It measures internet safety"], 0, "Clock speed is only one factor."],
          ["What is CPU cache?", ["Very fast memory close to the CPU", "A printer queue", "A folder for downloads", "A web browser tab"], 0, "Cache is fast local memory."],
          ["Which task is usually CPU-intensive?", ["Compressing a large video", "Waiting for a key press", "Displaying a saved file name", "Keeping a cable plugged in"], 0, "Video compression requires heavy processing."],
          ["Which answer best describes a balanced view of performance?", ["CPU, RAM, storage, cooling, and software all matter", "Only the CPU matters", "Only monitor size matters", "Only file names matter"], 0, "Whole-system balance matters."]
        ]
      }
    ]
  },
  {
    slug: "ram",
    title: "RAM",
    order: 3,
    description: "Learn how active memory works, why RAM is temporary, and how memory limits affect multitasking.",
    lessons: [
      {
        slug: "active-memory",
        title: "RAM And Active Memory",
        description: "Understand RAM as fast temporary working memory.",
        estimatedMinutes: 12,
        sections: [
          {
            heading: "What RAM Does",
            body: [
              "RAM stands for Random Access Memory. It is the computer's short-term working memory.",
              "When programs are running, active instructions and data are kept in RAM so the CPU can reach them quickly."
            ],
            bullets: ["RAM is much faster than storage.", "RAM helps active apps respond quickly.", "RAM is measured by capacity and speed."]
          },
          {
            heading: "Temporary Memory",
            body: [
              "RAM is volatile memory. It loses its contents when power is turned off.",
              "Saved files must be written to storage if they need to remain after shutdown."
            ],
            bullets: ["Unsaved work may be lost after power failure.", "Storage keeps saved files long term."]
          }
        ],
        summary: ["RAM is short-term working memory.", "RAM is fast but temporary.", "Storage is needed for long-term files."],
        quiz: [
          ["What does RAM stand for?", ["Random Access Memory", "Read Always Machine", "Remote App Manager", "Rapid Audio Mode"], 0, "RAM means Random Access Memory."],
          ["What kind of memory is RAM?", ["Temporary working memory", "Permanent photo storage", "A backup drive", "A web address"], 0, "RAM is temporary working memory."],
          ["What happens to normal RAM contents when power is turned off?", ["They are lost", "They become faster", "They move to the monitor", "They become a password"], 0, "RAM is volatile."],
          ["Which comparison is correct?", ["RAM is faster but temporary; storage is slower but long term", "RAM is only for printers", "Storage disappears after shutdown", "RAM and storage are exactly the same"], 0, "RAM and storage serve different roles."],
          ["What does RAM capacity describe?", ["How much active data it can hold", "How bright the screen is", "How many keys the keyboard has", "How many websites exist"], 0, "Capacity is how much RAM can hold."]
        ]
      },
      {
        slug: "multitasking-and-memory-limits",
        title: "Multitasking And Memory Limits",
        description: "Learn how RAM affects tabs, apps, and slowdowns.",
        estimatedMinutes: 13,
        sections: [
          {
            heading: "RAM And Multitasking",
            body: [
              "More RAM lets a computer keep more apps, browser tabs, and active files open at the same time.",
              "If RAM is too low, the system may move some data to storage, which is much slower."
            ],
            bullets: ["Enough RAM makes switching between apps smoother.", "Too little RAM can cause pauses or lag.", "Heavy apps and many browser tabs use more memory."]
          },
          {
            heading: "When Adding RAM Helps",
            body: [
              "Adding RAM helps most when memory is the bottleneck. It may not help much if the CPU, storage, or network is the real limit.",
              "Compatibility matters because motherboards support specific RAM types and capacities."
            ],
            bullets: ["DDR4 and DDR5 are RAM generations.", "A laptop or motherboard may have a maximum supported RAM amount."]
          }
        ],
        summary: ["More RAM can improve multitasking.", "Low RAM can make systems use slower storage as overflow.", "RAM upgrades help only when memory is the limiting factor."],
        quiz: [
          ["Why can more RAM improve multitasking?", ["More active apps and tabs can stay in memory", "It increases monitor size", "It changes the website address", "It replaces the CPU"], 0, "More RAM keeps active work available."],
          ["What may happen when a computer has too little RAM?", ["It may slow down while moving data to storage", "It becomes waterproof", "It deletes the CPU", "It cannot use a mouse"], 0, "Low RAM can cause slowdowns."],
          ["Which term describes common RAM generations?", ["DDR4 and DDR5", "HTTP and HTTPS", "PNG and JPG only", "LAN and WAN"], 0, "DDR names RAM technology generations."],
          ["Which item is usually stored long term, not just in RAM?", ["Saved photo file", "Current calculation inside an app", "Temporary clipboard data only", "Unsaved typed sentence only"], 0, "Saved files belong in storage."],
          ["Which statement is true about adding RAM?", ["It can help if memory is the bottleneck", "It always doubles internet speed", "It replaces backups", "It changes binary to decimal"], 0, "RAM helps when memory is limiting performance."]
        ]
      }
    ]
  },
  {
    slug: "storage",
    title: "Storage",
    order: 4,
    description: "Learn how files are kept long term, how SSDs and HDDs differ, and why backups matter.",
    lessons: [
      {
        slug: "files-folders-and-capacity",
        title: "Files, Folders, And Capacity",
        description: "Understand saved data, organization, and storage size.",
        estimatedMinutes: 12,
        sections: [
          {
            heading: "Storage And Saved Data",
            body: [
              "Storage keeps data for the long term. It holds the operating system, apps, documents, photos, videos, downloads, and other files.",
              "Unlike RAM, storage keeps saved data even when the computer is turned off."
            ],
            bullets: ["A file is a saved item.", "A folder organizes files and other folders.", "Capacity tells how much data can be saved."]
          },
          {
            heading: "Capacity Terms",
            body: [
              "Storage capacity is commonly measured in gigabytes and terabytes. Large videos and games need much more storage than text documents.",
              "More capacity means more space, but it does not automatically mean faster performance."
            ],
            bullets: ["GB means gigabyte.", "TB means terabyte.", "Free space helps the system work comfortably."]
          }
        ],
        summary: ["Storage keeps saved data long term.", "Files are saved items; folders organize them.", "Capacity measures how much data can fit."],
        quiz: [
          ["What is computer storage used for?", ["Keeping data long term", "Only cooling the CPU", "Only showing pixels", "Only creating passwords"], 0, "Storage keeps saved data."],
          ["What is a file?", ["A saved item such as a document or image", "Only a network cable", "Only a CPU core", "Only a monitor setting"], 0, "A file is a saved data item."],
          ["What is a folder used for?", ["Organizing files", "Increasing CPU clock speed", "Replacing RAM", "Encrypting every website"], 0, "Folders organize files."],
          ["What does storage capacity describe?", ["How much data can be saved", "How many cores a CPU has", "How bright the display is", "How safe a password is"], 0, "Capacity measures storage space."],
          ["Which type of file usually needs more storage?", ["A long video", "A short plain text note", "A one-word file name", "An empty folder"], 0, "Videos usually contain much more data."]
        ]
      },
      {
        slug: "hdd-ssd-and-backups",
        title: "HDD, SSD, And Backups",
        description: "Compare storage devices and learn how backups protect files.",
        estimatedMinutes: 14,
        sections: [
          {
            heading: "HDD And SSD",
            body: [
              "An HDD stores data on spinning magnetic disks. It often offers large capacity at lower cost.",
              "An SSD stores data using flash memory. It is usually faster, quieter, and more resistant to movement."
            ],
            bullets: ["HDD means hard disk drive.", "SSD means solid-state drive.", "SSDs often make startup and app loading faster."]
          },
          {
            heading: "Backups",
            body: [
              "A backup is an extra copy of important data. It protects against deletion, device failure, theft, malware, and other loss.",
              "Good backups are kept separately from the main device, such as on an external drive or trusted cloud service."
            ],
            bullets: ["Important files should not exist in only one place.", "Backups should be checked sometimes to make sure they work."]
          }
        ],
        summary: ["HDDs use spinning disks.", "SSDs use flash memory and are usually faster.", "Backups protect important files from loss."],
        quiz: [
          ["Which device is usually faster?", ["SSD", "HDD", "DVD label", "Keyboard"], 0, "SSDs are usually faster."],
          ["What does HDD stand for?", ["Hard Disk Drive", "High Data Display", "Home Device Driver", "Hidden Download Directory"], 0, "HDD means Hard Disk Drive."],
          ["Which statement about storage speed is true?", ["An SSD can make booting and app loading faster", "A larger drive is always faster", "A folder makes the CPU cooler", "Storage speed only affects printers"], 0, "Fast storage improves loading."],
          ["What is a backup?", ["An extra copy of important data", "A faster mouse", "A CPU instruction", "A web search result"], 0, "A backup is an extra copy."],
          ["Why should important files not exist in only one place?", ["That single place can fail or be lost", "Files cannot be copied", "RAM refuses files", "Folders delete monitors"], 0, "One copy is risky."]
        ]
      }
    ]
  },
  {
    slug: "operating-systems",
    title: "Operating Systems",
    order: 5,
    description: "Learn how system software manages apps, files, hardware, users, drivers, updates, and security.",
    lessons: [
      {
        slug: "os-responsibilities",
        title: "Operating System Responsibilities",
        description: "Learn the main jobs of an operating system.",
        estimatedMinutes: 13,
        sections: [
          {
            heading: "What An OS Is",
            body: [
              "An operating system, or OS, is the main system software that manages a computer or mobile device.",
              "It sits between users, applications, and hardware so the device can be used safely and consistently."
            ],
            bullets: ["Windows, macOS, Linux, Android, and iOS are operating systems.", "The OS starts and closes apps.", "The OS manages CPU time and memory."]
          },
          {
            heading: "Managing Resources",
            body: [
              "The OS decides how running programs share resources. It also helps users switch between apps.",
              "If an app becomes unresponsive, the OS may provide a way to close it without shutting down the whole device."
            ],
            bullets: ["Resource management keeps multiple apps usable.", "Task managers show running programs and resource use."]
          }
        ],
        summary: ["An OS manages the device.", "It runs apps and shares resources.", "It helps software use hardware safely."],
        quiz: [
          ["What is an operating system?", ["Main system software that manages a device", "Only a keyboard brand", "A type of cable", "A search result"], 0, "An OS manages the device."],
          ["Which is an example of an operating system?", ["Windows", "HDMI", "RAM", "Binary"], 0, "Windows is an operating system."],
          ["What does the OS share among running programs?", ["CPU time and memory", "Only printer ink", "Only website names", "Only passwords"], 0, "The OS manages resources."],
          ["What happens if an app becomes unresponsive?", ["The OS may let the user close it", "The monitor must be replaced", "The keyboard becomes storage", "All files become binary only"], 0, "The OS can manage app failures."],
          ["Which mobile system is an operating system?", ["Android", "USB", "SSD", "HTML"], 0, "Android is a mobile operating system."]
        ]
      },
      {
        slug: "files-users-drivers-and-updates",
        title: "Files, Users, Drivers, And Updates",
        description: "See how an OS manages files, accounts, hardware support, and security updates.",
        estimatedMinutes: 14,
        sections: [
          {
            heading: "Files, Users, And Drivers",
            body: [
              "The OS provides a file system so data can be saved, named, copied, moved, and deleted.",
              "User accounts separate personal files and settings. Device drivers help the OS communicate with specific hardware."
            ],
            bullets: ["Permissions control access to files and settings.", "A printer driver helps the OS use a printer.", "User accounts are useful on shared computers."]
          },
          {
            heading: "Updates And Security",
            body: [
              "Operating system updates fix bugs, improve compatibility, and patch security problems.",
              "Many operating systems also include security features such as a firewall, permissions, encryption options, and malware protection."
            ],
            bullets: ["Updates reduce known risks.", "Security tools are strongest when users also follow safe habits."]
          }
        ],
        summary: ["The OS manages files and accounts.", "Drivers help hardware work with the OS.", "Updates improve security and reliability."],
        quiz: [
          ["What is a device driver?", ["Software that helps the OS communicate with hardware", "A person driving a computer", "A folder of photos", "A type of binary digit"], 0, "Drivers connect OS and hardware."],
          ["Which OS feature helps organize saved data?", ["File system", "Clock speed", "Monitor stand", "CPU cache only"], 0, "The file system manages files."],
          ["Why are user accounts useful?", ["They separate files, settings, and permissions", "They increase cable length", "They turn RAM permanent", "They remove all updates"], 0, "Accounts separate users."],
          ["Why should operating systems be updated?", ["To fix bugs and security problems", "To make all files public", "To delete drivers always", "To remove the browser permanently"], 0, "Updates improve reliability and security."],
          ["Which security feature may be included in an OS?", ["Firewall", "Spinning disk only", "HDMI cable", "Binary number"], 0, "A firewall is a security feature."]
        ]
      }
    ]
  },
  {
    slug: "internet-basics",
    title: "Internet Basics",
    order: 6,
    description: "Understand browsers, URLs, websites, DNS, servers, search engines, and safe browsing habits.",
    lessons: [
      {
        slug: "browsers-urls-and-websites",
        title: "Browsers, URLs, And Websites",
        description: "Learn how browsers open web pages and how web addresses are structured.",
        estimatedMinutes: 13,
        sections: [
          {
            heading: "Internet, Web, And Browsers",
            body: [
              "The internet is a global network of connected devices. The web is one major service that runs on the internet.",
              "A browser is an app used to view websites. Common browsers include Chrome, Firefox, Safari, and Edge."
            ],
            bullets: ["A website is a collection of web pages.", "A browser requests files from a server.", "The browser turns those files into the page users see."]
          },
          {
            heading: "URLs",
            body: [
              "URL stands for Uniform Resource Locator. It is the address of a resource on the web.",
              "A URL can include a protocol, domain name, path, and other details."
            ],
            bullets: ["In https://quizniva.in/subjects/, https is the protocol.", "quizniva.in is the domain.", "/subjects/ is the path."]
          }
        ],
        summary: ["The internet is a global network.", "The web is one service on the internet.", "A browser opens websites using URLs."],
        quiz: [
          ["What is the internet?", ["A global network of connected devices", "Only one website", "A type of RAM", "A monitor setting"], 0, "The internet connects devices worldwide."],
          ["What is a browser used for?", ["Viewing websites", "Increasing RAM capacity", "Replacing storage", "Cooling the CPU"], 0, "A browser opens web pages."],
          ["What does URL mean?", ["Uniform Resource Locator", "User RAM Login", "Universal Router Light", "Updated Result List"], 0, "URL means Uniform Resource Locator."],
          ["Which part of https://quizniva.in/subjects/ is the domain name?", ["quizniva.in", "https", "/subjects/", "All search results"], 0, "quizniva.in is the domain."],
          ["Which statement is true?", ["A browser and search engine are different", "A browser is always RAM", "DNS is a printer", "A URL is a keyboard"], 0, "They have different jobs."]
        ]
      },
      {
        slug: "dns-servers-search-and-safety",
        title: "DNS, Servers, Search, And Safe Browsing",
        description: "Understand how names find servers and how to browse more safely.",
        estimatedMinutes: 14,
        sections: [
          {
            heading: "DNS, Servers, And Search",
            body: [
              "DNS stands for Domain Name System. It translates human-friendly domain names into IP addresses.",
              "A server provides services or data to other devices. A search engine helps users find pages on the web."
            ],
            bullets: ["DNS lets people use names instead of numeric addresses.", "Web servers respond to browser requests.", "Search engines index pages and return results."]
          },
          {
            heading: "Safe Browsing",
            body: [
              "Check that website addresses look correct before entering private information. Be careful with unexpected downloads and urgent messages.",
              "HTTPS helps protect data in transit, but it does not prove that every website is trustworthy."
            ],
            bullets: ["Look for misspelled domains.", "Avoid suspicious attachments.", "Do not rush when a page pressures you."]
          }
        ],
        summary: ["DNS maps domain names to IP addresses.", "Servers provide data or services.", "Safe browsing requires checking links and downloads."],
        quiz: [
          ["What does DNS do?", ["Translates domain names to IP addresses", "Stores photos permanently", "Charges the battery", "Changes monitor color"], 0, "DNS maps names to addresses."],
          ["What is a search engine used for?", ["Finding web pages", "Adding more CPU cores", "Formatting a hard drive only", "Replacing the operating system"], 0, "Search engines help find pages."],
          ["What does HTTPS mainly help protect?", ["Data sent between browser and site", "CPU temperature", "Folder names only", "Keyboard size"], 0, "HTTPS encrypts traffic in transit."],
          ["What is a server?", ["A computer or system that provides services or data", "Only a mouse", "Only a personal password", "A screen brightness level"], 0, "Servers provide services."],
          ["Which habit is safest online?", ["Check addresses before entering private information", "Click every urgent link", "Download every attachment", "Reuse one password everywhere"], 0, "Address checks reduce risk."]
        ]
      }
    ]
  },
  {
    slug: "binary",
    title: "Binary",
    order: 7,
    description: "Learn why computers use 0s and 1s and how binary patterns represent data.",
    lessons: [
      {
        slug: "bits-bytes-and-binary-numbers",
        title: "Bits, Bytes, And Binary Numbers",
        description: "Learn the basic binary number system and common data units.",
        estimatedMinutes: 14,
        sections: [
          {
            heading: "Binary Digits",
            body: [
              "Binary is a number system that uses only two digits: 0 and 1.",
              "Computers use binary because electronic circuits can reliably represent two states, such as off and on."
            ],
            bullets: ["A bit is one binary digit.", "A byte is usually 8 bits.", "Bytes are used to measure data and storage."]
          },
          {
            heading: "Place Values",
            body: [
              "Decimal place values are based on powers of 10. Binary place values are based on powers of 2.",
              "For example, binary 1011 means 8 + 0 + 2 + 1, which equals decimal 11."
            ],
            bullets: ["Right to left binary place values are 1, 2, 4, 8, 16, and so on.", "Each position is either used with 1 or not used with 0."]
          }
        ],
        summary: ["Binary uses 0 and 1.", "A bit is one binary digit.", "A byte is usually 8 bits.", "Binary place values use powers of 2."],
        quiz: [
          ["Which digits does binary use?", ["0 and 1", "0 through 9", "A through F only", "2 and 8 only"], 0, "Binary uses two digits."],
          ["What is one binary digit called?", ["Bit", "Byte", "Folder", "Pixel only"], 0, "A bit is one binary digit."],
          ["How many bits are usually in one byte?", ["8", "2", "10", "1000"], 0, "A byte is usually 8 bits."],
          ["What are binary place values based on?", ["Powers of 2", "Powers of 10 only", "Alphabet order", "File names"], 0, "Binary uses powers of 2."],
          ["What is the decimal value of binary 1011?", ["11", "9", "13", "1011"], 0, "1011 equals 11."]
        ]
      },
      {
        slug: "representing-data",
        title: "Representing Text, Images, And Sound",
        description: "Learn how binary patterns can represent many kinds of data.",
        estimatedMinutes: 15,
        sections: [
          {
            heading: "Data As Patterns",
            body: [
              "Computers store everything as binary patterns. The meaning depends on how software interprets those patterns.",
              "The same bits can represent a number, character, color, sound sample, or instruction depending on the format."
            ],
            bullets: ["Text uses character encodings such as ASCII or Unicode.", "Images store pixel color values.", "Audio stores sound samples over time."]
          },
          {
            heading: "File Size And Compression",
            body: [
              "A high-resolution image or long video needs many more bytes than a short text note.",
              "Compression tries to store data more efficiently, often by finding repeated patterns or using smarter encodings."
            ],
            bullets: ["Compression can reduce file size.", "Some compression loses detail; some preserves exact data."]
          }
        ],
        summary: ["Binary patterns can represent many types of data.", "Encoding or file format gives bits their meaning.", "Compression can reduce the number of bytes needed."],
        quiz: [
          ["Why do computers use binary?", ["Electronic circuits can represent two states reliably", "Screens only show black and white", "Keyboards have two keys", "The internet has two websites"], 0, "Binary maps well to electronic states."],
          ["How can text be stored in a computer?", ["As binary patterns using character encoding", "Only as paper", "Only as monitor brightness", "Only as a router signal"], 0, "Encoding maps text to binary."],
          ["What can a binary pattern represent?", ["Different data depending on the format", "Only the number one", "Only passwords", "Only websites"], 0, "Format gives meaning."],
          ["What does file compression try to do?", ["Store data more efficiently", "Add more CPU cores", "Turn RAM permanent", "Disable backups"], 0, "Compression reduces size when possible."],
          ["Which statement is true?", ["Computers store data as binary patterns", "Computers cannot store images", "Binary uses digits 0 to 9", "A byte is always one bit"], 0, "Digital data is stored as binary."]
        ]
      }
    ]
  },
  {
    slug: "networking-basics",
    title: "Networking Basics",
    order: 8,
    description: "Learn how devices communicate using LANs, WANs, routers, IP addresses, packets, Wi-Fi, bandwidth, and latency.",
    lessons: [
      {
        slug: "lan-wan-routers-and-ip-addresses",
        title: "LAN, WAN, Routers, And IP Addresses",
        description: "Understand local and wide networks and how devices are addressed.",
        estimatedMinutes: 14,
        sections: [
          {
            heading: "Networks And Scope",
            body: [
              "A computer network is a group of connected devices that can communicate and share resources.",
              "A LAN covers a local area such as a home, school, or office. A WAN covers a larger area and can connect many LANs."
            ],
            bullets: ["LAN means Local Area Network.", "WAN means Wide Area Network.", "The internet is the largest WAN."]
          },
          {
            heading: "Routers And Addresses",
            body: [
              "A router connects networks and directs traffic between them. In a home, it usually connects the local network to the internet.",
              "An IP address identifies a device on a network so data can reach the right destination."
            ],
            bullets: ["Private IP addresses are used inside local networks.", "Public IP addresses are used on the internet.", "Routers often translate between private and public addresses."]
          }
        ],
        summary: ["A network lets devices communicate.", "LANs are local; WANs cover larger areas.", "Routers connect networks.", "IP addresses identify network devices."],
        quiz: [
          ["What is a computer network?", ["Connected devices that communicate", "Only one offline computer", "A type of RAM", "A password list"], 0, "A network connects devices."],
          ["What does LAN stand for?", ["Local Area Network", "Large App Number", "Linked Audio Name", "Login Access Note"], 0, "LAN means Local Area Network."],
          ["What does WAN stand for?", ["Wide Area Network", "Wireless Audio Name", "Web App Number", "Working Access Note"], 0, "WAN means Wide Area Network."],
          ["What does a home router usually do?", ["Connects the local network to the internet", "Stores all photos forever", "Replaces the keyboard", "Prints every file"], 0, "Routers connect networks."],
          ["What is an IP address used for?", ["Identifying a device on a network", "Measuring monitor size", "Counting CPU cores", "Changing file type"], 0, "IP addresses identify network devices."]
        ]
      },
      {
        slug: "packets-bandwidth-latency-and-wifi",
        title: "Packets, Bandwidth, Latency, And Wi-Fi",
        description: "Learn how data travels and why network speed has more than one meaning.",
        estimatedMinutes: 15,
        sections: [
          {
            heading: "Packets",
            body: [
              "Network data is usually split into small pieces called packets. Packets include data and addressing information.",
              "Splitting data into packets helps networks share capacity and resend missing pieces when needed."
            ],
            bullets: ["Packets travel across networks.", "Large files are sent as many packets.", "Some packets may take different routes."]
          },
          {
            heading: "Speed And Delay",
            body: [
              "Bandwidth describes how much data can be sent over time. Latency describes delay.",
              "Video streaming needs good bandwidth, while games and video calls also need low latency. Wi-Fi is a wireless network connection."
            ],
            bullets: ["High bandwidth helps downloads.", "Low latency helps interactive apps.", "Wi-Fi can be affected by distance, walls, and interference."]
          }
        ],
        summary: ["Packets carry network data.", "Bandwidth is capacity.", "Latency is delay.", "Wi-Fi is wireless networking."],
        quiz: [
          ["What is a packet?", ["A small piece of network data", "A type of monitor", "A RAM slot", "A folder password"], 0, "Packets carry network data."],
          ["What does bandwidth describe?", ["How much data can be sent over time", "Delay only", "Password length", "Storage folder depth"], 0, "Bandwidth is data capacity."],
          ["What does latency describe?", ["Delay", "File size", "RAM type", "CPU temperature"], 0, "Latency is delay."],
          ["Which is an example of a wireless network connection?", ["Wi-Fi", "HDMI", "Printed paper", "CPU cache"], 0, "Wi-Fi is wireless networking."],
          ["Why are packets useful?", ["They help networks share capacity and resend missing pieces", "They make keyboards larger", "They permanently store files", "They replace operating systems"], 0, "Packets make communication flexible."]
        ]
      }
    ]
  },
  {
    slug: "cybersecurity-basics",
    title: "Cybersecurity Basics",
    order: 9,
    description: "Learn practical habits for protecting accounts, devices, data, and networks.",
    lessons: [
      {
        slug: "passwords-mfa-and-account-safety",
        title: "Passwords, MFA, And Account Safety",
        description: "Learn the basics of strong account protection.",
        estimatedMinutes: 14,
        sections: [
          {
            heading: "Cybersecurity And Passwords",
            body: [
              "Cybersecurity protects computers, accounts, networks, and data from unauthorized access, damage, theft, or misuse.",
              "Strong passwords should be long, hard to guess, and unique for each important account."
            ],
            bullets: ["Do not reuse one password everywhere.", "A password manager can store unique passwords.", "Long passphrases can be easier to remember."]
          },
          {
            heading: "Multi-Factor Authentication",
            body: [
              "Multi-factor authentication, or MFA, asks for another proof in addition to a password.",
              "This extra proof may be an app code, security key, or prompt on a trusted device."
            ],
            bullets: ["MFA helps if a password is stolen.", "App-based or hardware-based MFA is usually stronger than SMS-only codes."]
          }
        ],
        summary: ["Cybersecurity protects digital systems and data.", "Use strong unique passwords.", "MFA adds another layer of account protection."],
        quiz: [
          ["What is cybersecurity mainly about?", ["Protecting devices, accounts, networks, and data", "Increasing screen brightness", "Adding keyboard keys", "Changing binary to decimal"], 0, "Cybersecurity protects digital systems."],
          ["Which password habit is safest?", ["Use unique strong passwords", "Reuse one short password everywhere", "Share passwords in public chats", "Use only your name"], 0, "Unique strong passwords reduce risk."],
          ["What does MFA add?", ["Another proof besides the password", "More monitor pixels", "Extra storage folders", "A faster mouse"], 0, "MFA adds another layer."],
          ["Which tool can help store many unique passwords?", ["Password manager", "Monitor stand", "HDMI cable", "Printer tray"], 0, "Password managers store credentials."],
          ["Why is password reuse risky?", ["One breach can expose many accounts", "It increases RAM speed", "It makes backups impossible", "It changes DNS"], 0, "Reused passwords spread risk."]
        ]
      },
      {
        slug: "phishing-malware-updates-and-backups",
        title: "Phishing, Malware, Updates, And Backups",
        description: "Recognize common threats and safer recovery habits.",
        estimatedMinutes: 15,
        sections: [
          {
            heading: "Phishing And Malware",
            body: [
              "Phishing tries to trick people into revealing passwords, payment details, or private information.",
              "Malware is harmful software that can steal data, spy on users, damage files, or lock data for ransom."
            ],
            bullets: ["Urgent strange links are warning signs.", "Unexpected attachments can be risky.", "Install software only from trusted sources."]
          },
          {
            heading: "Updates And Backups",
            body: [
              "Updates fix known security problems in operating systems, browsers, and apps.",
              "Backups help recover files if a device fails, is stolen, or is damaged by malware."
            ],
            bullets: ["Keep important software updated.", "Important files should have an extra copy.", "Public Wi-Fi requires extra caution."]
          }
        ],
        summary: ["Phishing tricks users into giving away information.", "Malware is harmful software.", "Updates patch known risks.", "Backups help recover from loss or attacks."],
        quiz: [
          ["What is phishing?", ["A trick to steal information or access", "A normal storage backup", "A CPU cooling method", "A file compression format"], 0, "Phishing is deception."],
          ["Which is a phishing warning sign?", ["Urgent demand to click a strange link", "A known app update from settings", "A saved backup", "A familiar file you created"], 0, "Urgency and strange links are suspicious."],
          ["Why are updates important?", ["They fix bugs and security vulnerabilities", "They remove all files", "They make passwords public", "They stop backups"], 0, "Updates patch problems."],
          ["What is malware?", ["Harmful software", "A safe folder", "A binary digit", "A network cable"], 0, "Malware is malicious software."],
          ["Why are backups useful for security?", ["They help recover from loss or malware damage", "They prevent every phishing email", "They increase CPU cores", "They replace MFA"], 0, "Backups support recovery."]
        ]
      }
    ]
  }
];

const lessonDeepDives = {
  "hardware-basics/computer-hardware-overview": [
    {
      heading: "A Better Mental Model For Hardware",
      body: [
        "A useful way to understand hardware is to think of a computer as a small workspace. The desk is the motherboard because it connects everything. The worker is the CPU because it follows instructions. The open notebook is RAM because it holds the work currently being used. The filing cabinet is storage because it keeps finished and saved work for later.",
        "This mental model helps avoid a common beginner confusion: no single part is the whole computer. A computer feels fast only when the major parts cooperate well. A strong CPU with very little RAM may still struggle. A large storage drive with a slow processor may hold many files but respond slowly. Hardware is a system, not a single magic part."
      ],
      bullets: [
        "Motherboard: the connection platform.",
        "CPU: the instruction worker.",
        "RAM: the active workspace.",
        "Storage: the long-term filing area.",
        "Power and cooling: the support systems that keep everything running."
      ]
    },
    {
      heading: "How Hardware Works During A Simple Task",
      body: [
        "Imagine opening a document editor and typing a sentence. The keyboard sends input to the computer. The operating system and app receive that input. The CPU processes the key press, the RAM holds the document and app data while you work, and the screen shows the updated text.",
        "When you save the document, the data is written to storage. If you print it, the computer sends output to the printer. This same input, processing, memory, storage, and output pattern appears in almost every computer task, from opening a photo to playing a video."
      ],
      bullets: [
        "Typing starts as input.",
        "The CPU and software decide what the input means.",
        "RAM keeps the active document ready.",
        "Storage keeps the saved file after shutdown.",
        "The monitor or printer produces output."
      ]
    },
    {
      heading: "Common Beginner Mistakes",
      body: [
        "One common mistake is thinking that storage and memory are the same thing because both are measured in gigabytes. RAM is temporary working space; storage is long-term saved space. Another mistake is assuming a bigger number always means a better computer. More storage does not always make a computer faster, and more CPU cores do not always help simple tasks.",
        "A better habit is to ask what problem a part solves. If many apps lag at once, RAM may be the issue. If apps take a long time to open, storage speed may matter. If video editing or gaming is slow, CPU or graphics hardware may be limiting the system."
      ],
      bullets: [
        "Do not compare parts by one number only.",
        "Ask what work the computer is struggling with.",
        "Match the part to the problem: CPU for processing, RAM for active work, storage for saved data.",
        "Remember that software and hardware performance affect each other."
      ]
    }
  ],
  "hardware-basics/input-output-and-ports": [
    {
      heading: "Input And Output As A Conversation",
      body: [
        "Input and output are easiest to understand as a conversation between the user and the computer. Input is how you tell the computer something. Output is how the computer tells you something back. The keyboard, mouse, microphone, camera, and scanner are ways to speak to the computer. The monitor, speaker, printer, and projector are ways the computer responds.",
        "This conversation can happen very quickly. When you move a mouse, the computer receives position changes, processes them, and updates the pointer on the screen. When you join a video call, your microphone and camera are input devices, while your speakers and screen are output devices."
      ],
      bullets: [
        "Input sends data into the system.",
        "Output presents processed results.",
        "Some devices, such as touchscreens, do both.",
        "Most real tasks use several input and output devices together."
      ]
    },
    {
      heading: "Why Ports Matter",
      body: [
        "Ports are not just holes for cables. A port defines what kind of signal or data can move between devices. USB is flexible and supports keyboards, storage drives, phones, cameras, and many accessories. HDMI is designed for audio and video output. Ethernet is designed for reliable wired networking.",
        "Using the wrong port or cable can limit what a device can do. For example, a monitor may not work through a charging-only USB cable. A slow USB port may transfer files more slowly than a newer one. Ports are part of compatibility, speed, and reliability."
      ],
      bullets: [
        "USB is general-purpose.",
        "HDMI is common for displays and audio.",
        "Ethernet is common for wired networking.",
        "Audio ports carry sound signals.",
        "Cable quality and port version can affect performance."
      ]
    },
    {
      heading: "Troubleshooting Input And Output",
      body: [
        "When an input or output device does not work, troubleshoot in layers. First check the physical connection. Then check whether the device has power. Next check whether the operating system recognizes it. Finally check app permissions or settings.",
        "For example, if a microphone does not work in a meeting app, the microphone itself may be unplugged, muted, blocked by operating system permissions, or disabled inside the meeting app. Good troubleshooting avoids guessing and checks each layer calmly."
      ],
      bullets: [
        "Check cable or wireless connection.",
        "Check power and battery.",
        "Check operating system device settings.",
        "Check app permissions.",
        "Test with another app or device if possible."
      ]
    }
  ],
  "cpu/instructions-and-cores": [
    {
      heading: "The CPU As An Instruction Follower",
      body: [
        "A CPU does not understand goals like a human does. It follows very small instructions very quickly. A large task, such as opening a browser, drawing a page, or calculating a spreadsheet, becomes many tiny steps. The CPU executes those steps in order, often billions of cycles per second.",
        "This is why software quality matters. If a program gives the CPU inefficient instructions, the system can feel slow even on good hardware. Good performance comes from both strong hardware and instructions that are organized well."
      ],
      bullets: [
        "Programs are broken into small instructions.",
        "The CPU fetches, decodes, and executes instructions.",
        "Fast CPUs complete more work in less time.",
        "Poor software can waste CPU power."
      ]
    },
    {
      heading: "What Cores Really Change",
      body: [
        "A core is like one worker inside the CPU. Multiple cores can work on different tasks at the same time. This helps when you run a browser, music player, file download, and video call together. It can also help professional apps that split work across cores.",
        "However, some tasks cannot be split easily. If a task has to be done step by step, adding more cores may not make it much faster. This is why one app may use only part of a multi-core CPU while another app can use nearly all of it."
      ],
      bullets: [
        "More cores help with multitasking.",
        "More cores help parallel-friendly software.",
        "Some tasks stay limited by single-core speed.",
        "The operating system schedules work across cores."
      ]
    },
    {
      heading: "CPU Workloads In Real Life",
      body: [
        "Different activities stress the CPU in different ways. Writing notes uses very little CPU most of the time. Compressing a video, compiling code, editing photos, running simulations, or calculating many formulas can use much more processing power.",
        "When a computer becomes hot and fans spin loudly during heavy work, the CPU may be working hard. If cooling cannot remove heat fast enough, the processor may slow itself down to stay safe. That is why thin devices can feel fast for short bursts but slower during long heavy tasks."
      ],
      bullets: [
        "Light work: typing, reading, simple browsing.",
        "Medium work: many tabs, spreadsheets, basic photo edits.",
        "Heavy work: video export, large builds, games, simulations.",
        "Heat can limit sustained CPU performance."
      ]
    }
  ],
  "cpu/speed-cache-and-performance": [
    {
      heading: "Why Clock Speed Is Not The Whole Story",
      body: [
        "Clock speed tells how many cycles a CPU can attempt per second, but a cycle is not the same as a finished useful task. Two CPUs at the same GHz can perform differently because one may do more work per cycle, have better cache, handle branches better, or use newer architecture.",
        "This is similar to comparing two students by how fast they write. A student who writes quickly but solves each problem poorly is not necessarily better than one who writes slightly slower but thinks more efficiently. CPU design affects how much useful work happens in each cycle."
      ],
      bullets: [
        "GHz measures cycles, not complete user tasks.",
        "Architecture affects work per cycle.",
        "Cache, cores, power, and cooling also matter.",
        "Benchmarks should match the kind of work you care about."
      ]
    },
    {
      heading: "Cache As The CPU's Nearby Notebook",
      body: [
        "The CPU is much faster than regular RAM, so waiting for data can waste time. Cache reduces that waiting by keeping frequently used data very close to the processor. Cache is small because very fast memory is expensive and physically limited.",
        "A good cache system guesses what data the CPU will need soon. When the guess is right, the CPU continues quickly. When the guess is wrong, the CPU may need to fetch from slower memory. This hidden movement of data has a major effect on real performance."
      ],
      bullets: [
        "Cache is smaller than RAM but faster.",
        "Frequently used data benefits most from cache.",
        "Cache misses make the CPU wait longer.",
        "Good data organization in software can improve cache use."
      ]
    },
    {
      heading: "Balanced Performance Decisions",
      body: [
        "A balanced system avoids one part holding everything back. A fast CPU with a slow hard drive may still open apps slowly. A powerful CPU with too little RAM may spend time waiting as data is moved to storage. A strong CPU with weak cooling may slow during long tasks.",
        "When choosing or troubleshooting a computer, start with the task. For studying, browsing, and documents, modest CPU power with enough RAM and an SSD may feel excellent. For gaming, 3D work, or video editing, graphics hardware and sustained cooling may matter more."
      ],
      bullets: [
        "For everyday use, SSD and enough RAM often matter a lot.",
        "For heavy processing, CPU strength and cooling matter.",
        "For graphics-heavy tasks, GPU matters too.",
        "Avoid judging performance from one specification alone."
      ]
    }
  ],
  "ram/active-memory": [
    {
      heading: "RAM As The Computer's Work Table",
      body: [
        "Storage is like a bookshelf, and RAM is like the table where you place books while studying. Books on the shelf are saved, but they take longer to retrieve. Books on the table are ready to use immediately, but the table has limited space.",
        "When you open an app or file, the computer copies the active parts into RAM. The CPU then works with that active data. If the computer had to read every small piece directly from storage each time, even simple tasks would feel much slower."
      ],
      bullets: [
        "RAM holds what is being used now.",
        "Storage holds what is saved for later.",
        "The CPU uses RAM for active instructions and data.",
        "More open apps usually means more RAM use."
      ]
    },
    {
      heading: "Volatile Memory And Saving Work",
      body: [
        "RAM is volatile, which means it needs power to keep data. This is why saving work matters. When you save a file, the important data is written from active memory to long-term storage. Autosave features reduce risk by saving often in the background.",
        "Sleep mode and shutdown are different. In sleep mode, the computer may keep RAM powered with very low energy so you can resume quickly. In a full shutdown, RAM contents are cleared and the system starts fresh next time."
      ],
      bullets: [
        "Unsaved work usually lives in RAM.",
        "Saved work is written to storage.",
        "Power loss can remove unsaved changes.",
        "Autosave helps but should not replace good saving habits."
      ]
    },
    {
      heading: "Why RAM Feels Invisible Until It Runs Out",
      body: [
        "When a computer has enough RAM, you may not notice it. Apps open, tabs stay ready, and switching tasks feels smooth. When RAM becomes limited, the system must work harder to decide what stays active and what gets pushed aside.",
        "This is why RAM problems often feel like random slowness. The CPU may be waiting for data to be moved around. The storage drive may become busy. Apps may reload when you switch back to them. The system is not necessarily broken; it may simply be short on workspace."
      ],
      bullets: [
        "Enough RAM makes multitasking feel smooth.",
        "Low RAM can cause reloads and pauses.",
        "Slow storage makes low-RAM situations worse.",
        "Closing unused apps can free active memory."
      ]
    }
  ],
  "ram/multitasking-and-memory-limits": [
    {
      heading: "What Multitasking Does To Memory",
      body: [
        "Every running app needs some memory. A browser tab, document editor, video player, chat app, and antivirus tool can all use RAM at the same time. The operating system also needs memory for its own work.",
        "Some apps use little memory, while others use a lot. A plain text editor may need very little. A browser with many tabs, a game, a design tool, or a virtual machine may need much more. Memory pressure grows when many heavy tasks run together."
      ],
      bullets: [
        "Each running app has memory needs.",
        "Browser tabs can add up quickly.",
        "Large files need more memory while open.",
        "Background apps also use RAM."
      ]
    },
    {
      heading: "Swap, Paging, And Why Things Slow Down",
      body: [
        "When RAM fills up, the operating system may move less active data to storage. This is often called swap or paging. It lets the computer keep running, but storage is much slower than RAM, so performance can drop.",
        "An SSD handles this better than an old hard drive, but swap is still not a full replacement for enough RAM. If a computer constantly swaps data, adding RAM or closing unused apps can make a big difference."
      ],
      bullets: [
        "Swap uses storage as overflow for memory.",
        "Swap prevents immediate failure but can slow the system.",
        "SSD swap is faster than HDD swap but still slower than RAM.",
        "Constant swapping means memory is under pressure."
      ]
    },
    {
      heading: "How To Think About RAM Upgrades",
      body: [
        "A RAM upgrade helps when memory is the bottleneck. If your computer slows only when many apps or tabs are open, RAM may help. If it slows during one heavy calculation, the CPU may be the limit. If it takes a long time to open files, storage may be the limit.",
        "Compatibility matters. Desktop and laptop systems support specific RAM types, speeds, capacities, and physical sizes. Before upgrading, check the motherboard or laptop specifications instead of buying only by capacity."
      ],
      bullets: [
        "Upgrade RAM when multitasking causes slowdowns.",
        "Check supported RAM type before buying.",
        "More RAM does not automatically improve every task.",
        "A balanced system matters more than one large number."
      ]
    }
  ],
  "storage/files-folders-and-capacity": [
    {
      heading: "Storage As Long-Term Memory",
      body: [
        "Storage is the part of a computer that remembers data after power is turned off. The operating system, apps, photos, videos, notes, downloads, and documents all live in storage when they are saved.",
        "When you open a file, the computer reads it from storage into RAM. When you save changes, the updated data is written back to storage. This movement between storage and RAM is one of the basic rhythms of computer use."
      ],
      bullets: [
        "Saved data lives in storage.",
        "Open data is usually copied into RAM.",
        "Saving writes changes back to storage.",
        "Storage problems can affect startup, loading, and file access."
      ]
    },
    {
      heading: "Files, Folders, And Paths",
      body: [
        "A file is a named collection of data. A folder is a container that helps organize files and other folders. The location of a file is often described by a path, such as a folder path ending in the file name.",
        "Good organization reduces time spent searching. Use meaningful names, group related files, and avoid saving everything on the desktop. Organization is not only neatness; it makes backups, sharing, and troubleshooting easier."
      ],
      bullets: [
        "Use clear file names.",
        "Group related files into folders.",
        "Avoid duplicate mystery files such as final2-new-copy.",
        "Keep important files somewhere included in backups."
      ]
    },
    {
      heading: "Capacity, Free Space, And File Types",
      body: [
        "Capacity tells how much data a storage device can hold. Text files are usually tiny. Photos are larger. Videos, games, virtual machines, and software development tools can be very large.",
        "Free space also matters. Operating systems and apps often need room for updates, temporary files, caches, and downloads. A nearly full drive can cause warnings, failed updates, or slower behavior."
      ],
      bullets: [
        "GB and TB measure storage capacity.",
        "Videos and games often use the most space.",
        "Temporary files and caches can grow over time.",
        "Keep some free space for updates and normal operation."
      ]
    }
  ],
  "storage/hdd-ssd-and-backups": [
    {
      heading: "Why SSDs Feel Faster",
      body: [
        "An HDD uses spinning magnetic disks and a moving read/write head. This mechanical movement adds delay, especially when reading many small files scattered across the disk. An SSD uses flash memory with no spinning parts, so it can access many small pieces of data much faster.",
        "This is why replacing an old hard drive with an SSD often makes a computer feel new. Startup, app launch, search, file copying, and system updates can all improve because the computer waits less for storage."
      ],
      bullets: [
        "HDDs have moving parts.",
        "SSDs have no spinning disk.",
        "SSDs are usually faster for many small reads.",
        "SSDs are quieter and more resistant to movement."
      ]
    },
    {
      heading: "Choosing Storage For The Job",
      body: [
        "Different storage choices fit different needs. An SSD is usually best for the operating system and apps because speed matters there. An HDD can still be useful for large archives, backups, and media collections when cost per terabyte matters more than speed.",
        "External drives and cloud storage solve different problems. External drives are useful for large local copies. Cloud storage is useful for access across devices and protection if your physical device is lost, but it depends on internet access and account security."
      ],
      bullets: [
        "Use SSDs for speed-sensitive work.",
        "Use large HDDs for cheaper bulk storage if speed is less important.",
        "Use external drives for local backup copies.",
        "Use cloud storage carefully with strong account security."
      ]
    },
    {
      heading: "Backups As Insurance",
      body: [
        "A backup is not just another copy on the same computer. If the computer is stolen, damaged, infected, or accidentally wiped, a same-device copy may disappear too. A useful backup should be separated from the original.",
        "A simple backup rule is 3-2-1: keep three copies of important data, on two different types of storage, with one copy off-site or in the cloud. Beginners do not need to be perfect, but they should avoid having important files in only one place."
      ],
      bullets: [
        "A backup should survive failure of the main device.",
        "Test that backups can be restored.",
        "Back up before major updates or repairs.",
        "Protect backup accounts with strong passwords and MFA."
      ]
    }
  ],
  "operating-systems/os-responsibilities": [
    {
      heading: "The OS As The Manager",
      body: [
        "An operating system is like the manager of a busy workplace. Apps are workers asking for time, memory, files, network access, sound, display output, and user input. The OS coordinates these requests so the device remains usable.",
        "Without an operating system, every app would need to know how to control every device directly. That would be chaotic and unsafe. The OS creates common rules and services that apps can use."
      ],
      bullets: [
        "The OS starts and stops programs.",
        "The OS allocates memory.",
        "The OS schedules CPU time.",
        "The OS provides access to files and devices.",
        "The OS enforces many security rules."
      ]
    },
    {
      heading: "Processes, Apps, And Resource Sharing",
      body: [
        "When an app runs, the operating system treats it as one or more processes. A process gets memory, CPU time, and access permissions. The OS switches between processes quickly so multiple apps appear to run at once.",
        "This switching is why you can listen to music while downloading a file and writing notes. The OS keeps giving each task small turns. If one app uses too many resources or stops responding, the OS may let you close it from a task manager."
      ],
      bullets: [
        "A process is a running program or part of one.",
        "The OS schedules CPU time between processes.",
        "Memory protection helps apps avoid damaging each other.",
        "Task managers show resource use."
      ]
    },
    {
      heading: "Why Operating Systems Feel Different",
      body: [
        "Windows, macOS, Linux, Android, and iOS have different designs, interfaces, permissions, app ecosystems, and update systems. Still, their core responsibilities are similar: run apps, manage hardware, organize files, and protect the user.",
        "Learning one operating system well makes it easier to learn another. The names and buttons change, but the concepts repeat. Files, processes, permissions, settings, updates, drivers, and networks exist in some form across modern systems."
      ],
      bullets: [
        "Interfaces differ, but core jobs repeat.",
        "Mobile operating systems also manage apps, storage, permissions, and updates.",
        "Linux often exposes more low-level controls.",
        "iOS and Android use stricter app sandboxing than many desktop systems."
      ]
    }
  ],
  "operating-systems/files-users-drivers-and-updates": [
    {
      heading: "File Systems And Permissions",
      body: [
        "The operating system uses a file system to store and organize data on storage devices. The file system tracks names, folders, locations, free space, and metadata such as dates and permissions.",
        "Permissions decide who can read, change, run, or delete something. This matters on shared computers and also protects system files. If every app could freely change every file, malware and mistakes would be much more dangerous."
      ],
      bullets: [
        "File systems organize stored data.",
        "Permissions control access.",
        "System files often need special permission to change.",
        "User folders separate personal data."
      ]
    },
    {
      heading: "Drivers As Translators",
      body: [
        "A driver is software that helps the operating system talk to a specific piece of hardware. The OS may know what a printer is in general, but the driver knows how to communicate with a particular printer model.",
        "Driver problems can cause devices to fail, behave strangely, or lose features. Modern operating systems include many drivers automatically, but specialized hardware may still need manufacturer drivers or updates."
      ],
      bullets: [
        "Drivers translate OS requests into device-specific commands.",
        "Printers, graphics cards, network adapters, and audio devices often use drivers.",
        "Incorrect drivers can cause instability.",
        "Driver updates can fix bugs or add support."
      ]
    },
    {
      heading: "Updates Are Maintenance, Not Decoration",
      body: [
        "Updates are often annoying because they interrupt work, but they are essential maintenance. They can patch security holes, fix crashes, improve hardware support, and keep apps compatible with newer services.",
        "Delaying updates forever increases risk. A safer habit is to save work, keep backups, and install updates from official system settings or trusted sources. This reduces the chance of both security problems and fake update scams."
      ],
      bullets: [
        "Use official update channels.",
        "Back up important data before major upgrades.",
        "Restart when updates require it.",
        "Be suspicious of random pop-ups claiming you need an urgent update."
      ]
    }
  ],
  "internet-basics/browsers-urls-and-websites": [
    {
      heading: "Internet Versus Web",
      body: [
        "The internet is the global network infrastructure. The web is a service built on top of that infrastructure. Email, messaging, video calls, online games, file sync, and the web can all use the internet.",
        "A website is not stored inside your browser. The browser requests web page files from servers, receives them over the internet, and then renders them. That rendering step is why the same website may look slightly different across browsers or devices."
      ],
      bullets: [
        "The internet is the network.",
        "The web is one major service on the network.",
        "Browsers request and display web pages.",
        "Servers store or generate website data."
      ]
    },
    {
      heading: "What Happens When You Open A URL",
      body: [
        "When you type a URL, the browser first figures out where the site lives. It may ask DNS for an IP address. Then it connects to the server, requests the page, downloads resources, and displays the result.",
        "A single page can require many resources: HTML for structure, CSS for style, JavaScript for behavior, images, fonts, videos, and data requests. This is why complex pages may continue loading after the first text appears."
      ],
      bullets: [
        "The browser reads the URL.",
        "DNS may translate the domain to an IP address.",
        "The browser connects to the server.",
        "The server sends resources.",
        "The browser renders the page."
      ]
    },
    {
      heading: "Reading URLs Carefully",
      body: [
        "A URL contains clues about where you are. The domain name is especially important. Attackers often use look-alike names, extra words, or misleading subdomains to trick users.",
        "For example, `quizniva.in` and `quizniva.example.com` are not the same domain. In the second address, the main domain is `example.com`. Learning to identify the real domain helps prevent phishing."
      ],
      bullets: [
        "Look for the real domain before entering private information.",
        "HTTPS protects the connection but does not guarantee honesty.",
        "Be careful with shortened links when context is unclear.",
        "Search results can include ads or misleading pages."
      ]
    }
  ],
  "internet-basics/dns-servers-search-and-safety": [
    {
      heading: "DNS As The Internet's Naming Helper",
      body: [
        "Computers route traffic using addresses, but humans remember names better. DNS connects these two worlds by translating domain names into IP addresses.",
        "DNS is distributed, meaning no single small list contains every answer. Resolvers, root servers, top-level domain servers, and authoritative servers work together behind the scenes to find the correct address."
      ],
      bullets: [
        "Domain names are for humans.",
        "IP addresses are for network routing.",
        "DNS lookups usually happen automatically.",
        "DNS caching makes repeated visits faster."
      ]
    },
    {
      heading: "Servers And Search Engines",
      body: [
        "A server is a computer or service that responds to requests. A web server sends web pages or data to browsers. A search engine is different: it discovers pages, indexes them, and ranks results for searches.",
        "Typing a website address directly and searching for a website are not the same action. Searching sends your words to a search engine. Typing a known address asks the browser to open that address."
      ],
      bullets: [
        "Servers provide data or services.",
        "Search engines help find pages.",
        "A browser opens pages.",
        "A search result may not always be the official site."
      ]
    },
    {
      heading: "Safer Browsing Habits",
      body: [
        "Safe browsing is mostly careful attention. Check the domain before logging in, be suspicious of urgent messages, avoid unexpected downloads, and do not enter sensitive data on pages you reached from strange links.",
        "HTTPS is important because it encrypts data in transit, but it does not prove that a site is legitimate. A phishing site can also use HTTPS. Security is a chain of signals, not one icon."
      ],
      bullets: [
        "Navigate to important sites from bookmarks or typed addresses.",
        "Avoid entering passwords after clicking suspicious links.",
        "Keep the browser updated.",
        "Use MFA for important accounts."
      ]
    }
  ],
  "binary/bits-bytes-and-binary-numbers": [
    {
      heading: "Why Two States Are Enough",
      body: [
        "Binary may look limited because it has only 0 and 1, but long patterns of 0s and 1s can represent enormous variety. The power comes from combinations. One bit gives 2 possibilities. Two bits give 4. Eight bits give 256.",
        "Electronic circuits work well with two clear states. It is easier to reliably detect low versus high voltage than many tiny levels. Binary gives computers a stable foundation for representing information."
      ],
      bullets: [
        "1 bit has 2 possible values.",
        "2 bits have 4 possible patterns.",
        "8 bits usually make 1 byte.",
        "More bits allow more possible values."
      ]
    },
    {
      heading: "Building Decimal Values From Binary",
      body: [
        "Binary place values double as you move left: 1, 2, 4, 8, 16, 32, and so on. A 1 means include that place value. A 0 means skip it.",
        "For example, binary 1101 uses 8, 4, skips 2, and uses 1. The decimal value is 8 + 4 + 1 = 13. This is the same idea as decimal place value, but the base is 2 instead of 10."
      ],
      bullets: [
        "Rightmost bit is worth 1.",
        "Next bit is worth 2.",
        "Next bit is worth 4.",
        "Each place doubles as you move left.",
        "Add the place values where the bit is 1."
      ]
    },
    {
      heading: "Units Without Memorization Panic",
      body: [
        "Beginners often try to memorize every unit immediately. A better start is to understand the scale. Bits are tiny. Bytes are groups of bits. Kilobytes, megabytes, gigabytes, and terabytes describe larger amounts of data.",
        "Exact computer storage units can be discussed in decimal or binary forms depending on context, which is why drive sizes may look slightly different in operating systems. For beginner understanding, focus first on relative size and purpose."
      ],
      bullets: [
        "Bits are individual binary digits.",
        "Bytes are the common building block for file sizes.",
        "Text is usually much smaller than video.",
        "Large apps and media require many more bytes."
      ]
    }
  ],
  "binary/representing-data": [
    {
      heading: "Meaning Comes From Encoding",
      body: [
        "Binary data by itself is just a pattern. Software needs rules to interpret it. Those rules are called encodings, formats, or protocols depending on the context.",
        "The same binary pattern could mean a number in one program, a letter in another, a color value in an image, or part of an instruction in machine code. This is why file type and format matter."
      ],
      bullets: [
        "Text needs character encoding.",
        "Images need pixel and color formats.",
        "Audio needs sample format and timing.",
        "Programs need instruction formats."
      ]
    },
    {
      heading: "Text, Images, And Audio",
      body: [
        "Text can be represented by assigning numbers to characters. ASCII covers basic English characters, while Unicode supports many languages and symbols. The computer stores the numbers as binary.",
        "Images are often stored as grids of pixels. Each pixel has color information. Audio is stored as samples, which are measurements of sound at many moments per second. More detail usually means more data."
      ],
      bullets: [
        "More pixels usually means larger image files.",
        "More audio samples can mean higher quality and larger files.",
        "Unicode helps represent text from many languages.",
        "Compression can reduce file size."
      ]
    },
    {
      heading: "Why Files Need Formats",
      body: [
        "A file format tells software how to interpret bytes. A `.txt` file is interpreted as text. A `.png` file is interpreted as an image. A `.mp3` file is interpreted as compressed audio.",
        "If you rename a file extension without changing its actual data, the contents do not magically change. The extension is a label; the bytes inside still need to match the expected format."
      ],
      bullets: [
        "File extensions hint at format.",
        "Software reads bytes according to format rules.",
        "Renaming a file does not convert it.",
        "Corrupt or mismatched formats may fail to open."
      ]
    }
  ],
  "networking-basics/lan-wan-routers-and-ip-addresses": [
    {
      heading: "Networks As Addressed Communication",
      body: [
        "A network is not just devices being near each other. The devices need rules for addressing, sending, receiving, and checking data. Without addressing, a message would not know where to go.",
        "In a home network, your phone, laptop, smart TV, and printer may all have local addresses. The router helps those devices communicate with each other and with the wider internet."
      ],
      bullets: [
        "Devices need addresses to communicate.",
        "Local networks connect nearby devices.",
        "Routers connect different networks.",
        "Network rules are called protocols."
      ]
    },
    {
      heading: "LAN, WAN, And The Internet",
      body: [
        "A LAN is a local network, such as the network inside a home or school. It is usually controlled by one person or organization. A WAN covers a much larger area and connects many smaller networks.",
        "The internet is a huge network of networks. Your home router does not connect directly to every website. It sends traffic through your internet service provider and many other networks until the data reaches the destination."
      ],
      bullets: [
        "LAN: small local area.",
        "WAN: large wide area.",
        "ISP: company that provides internet access.",
        "Internet: many networks connected together."
      ]
    },
    {
      heading: "Private And Public Addresses",
      body: [
        "Home devices often use private IP addresses that work only inside the local network. The router has a public-facing connection to the internet. It translates traffic between private local devices and outside services.",
        "This translation is one reason many devices can share one internet connection. It also means a device's local address may not be visible directly to websites on the internet."
      ],
      bullets: [
        "Private IP addresses are used inside local networks.",
        "Public IP addresses are used across the internet.",
        "Routers forward traffic between networks.",
        "Address translation helps many devices share one connection."
      ]
    }
  ],
  "networking-basics/packets-bandwidth-latency-and-wifi": [
    {
      heading: "Why Data Is Split Into Packets",
      body: [
        "Networks usually do not send a whole video, page, or file as one giant piece. They split data into packets. Each packet contains a small part of the data plus information about where it is going.",
        "Packets make networks flexible. If one route is busy or one packet is lost, systems can resend missing pieces or route data in manageable chunks. This packet idea is one of the reasons the internet can serve many users at once."
      ],
      bullets: [
        "Large data becomes many packets.",
        "Packets include addressing information.",
        "Lost packets can often be resent.",
        "Many devices share network capacity packet by packet."
      ]
    },
    {
      heading: "Bandwidth Versus Latency",
      body: [
        "Bandwidth and latency are different. Bandwidth is how much data can move per second. Latency is how long it takes for a small piece of data to travel and get a response.",
        "A road analogy helps: bandwidth is how many lanes the road has, while latency is how long it takes to make a trip. A wide road can carry many cars, but if the destination is far away or traffic lights are slow, each trip may still take time."
      ],
      bullets: [
        "Downloads need enough bandwidth.",
        "Video calls need bandwidth and low latency.",
        "Online games are sensitive to latency.",
        "Speed tests often show both download speed and ping."
      ]
    },
    {
      heading: "Wi-Fi Quality In Real Rooms",
      body: [
        "Wi-Fi is convenient because it avoids cables, but it is affected by distance, walls, interference, router placement, and the number of connected devices. A weak Wi-Fi signal can make a fast internet plan feel slow.",
        "Improving Wi-Fi often starts with placement. Put the router in a central, open location, away from thick walls and interference sources. For important work, wired Ethernet can be more stable than Wi-Fi."
      ],
      bullets: [
        "Distance weakens Wi-Fi signal.",
        "Walls and metal objects can reduce quality.",
        "Many nearby networks can cause interference.",
        "Ethernet is often more stable for fixed devices."
      ]
    }
  ],
  "cybersecurity-basics/passwords-mfa-and-account-safety": [
    {
      heading: "Security As Risk Reduction",
      body: [
        "Cybersecurity is not about becoming impossible to attack. It is about reducing risk. Good habits make common attacks harder, limit damage when something goes wrong, and make recovery easier.",
        "Beginners should focus on high-impact basics: strong unique passwords, MFA, updates, backups, careful link checking, and avoiding suspicious downloads. These habits stop many everyday problems."
      ],
      bullets: [
        "Reduce the chance of account theft.",
        "Limit damage if one account is exposed.",
        "Make recovery possible with backups.",
        "Avoid panic decisions from urgent messages."
      ]
    },
    {
      heading: "Why Unique Passwords Matter",
      body: [
        "If you reuse one password everywhere, one breached website can put many accounts at risk. Attackers often try leaked email and password pairs on other services. This is called credential stuffing.",
        "A password manager helps by creating and storing unique passwords. You only need to remember the master password, which should be long and protected with MFA where possible."
      ],
      bullets: [
        "Use a different password for each important account.",
        "Long passphrases are often stronger and easier to remember.",
        "Do not share passwords in chats or documents.",
        "Change passwords after a known breach."
      ]
    },
    {
      heading: "MFA And Recovery Planning",
      body: [
        "MFA adds a second proof beyond the password. Even if someone learns your password, they may not be able to sign in without the second factor. This is especially important for email, banking, cloud storage, and social accounts.",
        "Recovery settings matter too. Keep recovery email addresses and phone numbers updated. Save backup codes in a safe place. A strong account is not useful if you permanently lock yourself out."
      ],
      bullets: [
        "Enable MFA on important accounts.",
        "Prefer authenticator apps or security keys when available.",
        "Store backup codes safely.",
        "Keep recovery information current."
      ]
    }
  ],
  "cybersecurity-basics/phishing-malware-updates-and-backups": [
    {
      heading: "How Phishing Manipulates People",
      body: [
        "Phishing works because it targets attention and emotion. Messages often create urgency, fear, curiosity, or reward. They may claim your account will close, a package is waiting, a payment failed, or a prize is available.",
        "The goal is to make you act before thinking. Slowing down is a security skill. Check the sender, domain, link destination, attachment type, and whether the request makes sense."
      ],
      bullets: [
        "Urgency is a warning sign.",
        "Unexpected attachments deserve caution.",
        "Login links in messages should be treated carefully.",
        "When unsure, open the official site directly."
      ]
    },
    {
      heading: "Malware And Unsafe Downloads",
      body: [
        "Malware can arrive through fake installers, cracked software, malicious attachments, infected USB drives, or compromised websites. Once running, it may steal data, spy on activity, damage files, or encrypt files for ransom.",
        "The safest habit is to install software only from trusted sources, keep security tools active, and avoid disabling protections for unknown programs. Free software that asks you to bypass warnings is often not truly free."
      ],
      bullets: [
        "Avoid pirated or cracked software.",
        "Be careful with macro-enabled documents.",
        "Scan unknown files when possible.",
        "Do not ignore operating system security warnings."
      ]
    },
    {
      heading: "Updates And Backups Work Together",
      body: [
        "Updates reduce the chance of infection by fixing known weaknesses. Backups reduce the damage if something still goes wrong. Together, they form prevention and recovery.",
        "A backup should not always stay connected if ransomware is a concern, because connected drives can sometimes be encrypted too. Cloud version history or offline external backups can help recover older clean copies."
      ],
      bullets: [
        "Update the operating system, browser, and important apps.",
        "Back up important files regularly.",
        "Keep at least one backup separated from the main device.",
        "Practice restoring a file so you know the backup works."
      ]
    }
  ]
};

function decorateLesson(group, lesson, lessonIndex) {
  const lessonOrder = lessonIndex + 1;
  const id = `computer-fundamentals-${group.slug}-${lesson.slug}`;
  const deepDiveSections = lessonDeepDives[`${group.slug}/${lesson.slug}`] ?? [];
  const sections = [...lesson.sections, ...deepDiveSections];

  return {
    ...lesson,
    id,
    sections,
    subject: SUBJECT,
    difficulty: group.title,
    topicGroup: group.title,
    topicGroupSlug: group.slug,
    topicGroupOrder: group.order,
    lessonOrder,
    order: (group.order - 1) * 10 + lessonOrder,
    estimatedMinutes: lesson.estimatedMinutes + deepDiveSections.length * 3,
    questionCount: lesson.quiz.length,
    status: "ready",
    contentUrl: `/computer-fundamentals/${group.slug}/${lesson.slug}`,
    quizSlug: id,
    quizUrl: `/quizzes/${id}`
  };
}

export const computerFundamentalsTopicGroups = courseGroups.map((group) => {
  const lessons = group.lessons.map((lesson, index) => decorateLesson(group, lesson, index));

  return {
    ...group,
    subject: SUBJECT,
    lessons,
    lessonCount: lessons.length,
    questionCount: lessons.reduce((total, lesson) => total + lesson.questionCount, 0),
    contentUrl: `/computer-fundamentals/${group.slug}`
  };
});

export const computerFundamentalsLessons = computerFundamentalsTopicGroups.flatMap((group) => group.lessons);

export const computerFundamentalsQuestions = computerFundamentalsLessons.flatMap((lesson) =>
  lesson.quiz.map(([question, options, correctAnswerIndex, explanation], index) => ({
    id: `${lesson.id}_${String(index + 1).padStart(3, "0")}`,
    topicId: lesson.id,
    question,
    options,
    correctAnswerIndex,
    shortExplanation: explanation,
    fullExplanation: explanation,
    difficulty: index < 2 ? "easy" : index < 4 ? "medium" : "hard"
  }))
);
