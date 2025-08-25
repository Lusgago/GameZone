// Tailwind configuration
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#6d28d9",
        secondary: "#10b981",
        xbox: "#107C10",
        playstation: "#006FCD",
        nintendo: "#E60012",
        pc: "#00ADEF",
        dark: "#0F172A",
        "neon-purple": "#8B5CF6",
        "neon-blue": "#3B82F6",
        "neon-green": "#10B981",
        "neon-pink": "#EC4899",
      },
      borderRadius: {
        none: "0px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        full: "9999px",
        button: "8px",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
};

// Charts initialization
document.addEventListener("DOMContentLoaded", function () {
  // Platform Chart
  const platformChart = echarts.init(document.getElementById("platformChart"));
  const platformOption = {
    animation: false,
    tooltip: {
      trigger: "item",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      textStyle: {
        color: "#1f2937",
      },
    },
    legend: {
      top: "bottom",
      textStyle: {
        color: "#f8fafc",
      },
    },
    series: [
      {
        name: "Games by Platform",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#0F172A",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "18",
            fontWeight: "bold",
            color: "#f8fafc",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: 35,
            name: "PlayStation",
            itemStyle: { color: "rgba(87, 181, 231, 1)" },
          },
          {
            value: 30,
            name: "Xbox",
            itemStyle: { color: "rgba(141, 211, 199, 1)" },
          },
          {
            value: 25,
            name: "PC",
            itemStyle: { color: "rgba(251, 191, 114, 1)" },
          },
          {
            value: 20,
            name: "Nintendo",
            itemStyle: { color: "rgba(252, 141, 98, 1)" },
          },
        ],
      },
    ],
  };
  platformChart.setOption(platformOption);

  // Genre Chart
  const genreChart = echarts.init(document.getElementById("genreChart"));
  const genreOption = {
    animation: false,
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      textStyle: {
        color: "#1f2937",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "10%",
      top: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: [
        "Action",
        "RPG",
        "FPS",
        "Adventure",
        "Sports",
        "Racing",
        "Strategy",
      ],
      axisLine: {
        lineStyle: {
          color: "#4b5563",
        },
      },
      axisLabel: {
        color: "#f8fafc",
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#4b5563",
        },
      },
      axisLabel: {
        color: "#f8fafc",
      },
      splitLine: {
        lineStyle: {
          color: "#374151",
        },
      },
    },
    series: [
      {
        name: "Popularity",
        type: "bar",
        data: [85, 78, 72, 65, 60, 55, 48],
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "rgba(87, 181, 231, 1)" },
            { offset: 1, color: "rgba(87, 181, 231, 0.5)" },
          ]),
          borderRadius: [5, 5, 0, 0],
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(139, 92, 246, 1)" },
              { offset: 1, color: "rgba(139, 92, 246, 0.5)" },
            ]),
          },
        },
      },
    ],
  };
  genreChart.setOption(genreOption);

  // Responsive charts
  window.addEventListener("resize", function () {
    platformChart.resize();
    genreChart.resize();
  });
});

// Favorite button toggle
document.addEventListener("DOMContentLoaded", function () {
  const favoriteButtons = document.querySelectorAll(
    ".game-card .absolute.top-2.right-2 button",
  );

  favoriteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const icon = this.querySelector("i");

      if (icon.classList.contains("ri-heart-line")) {
        icon.classList.remove("ri-heart-line");
        icon.classList.add("ri-heart-fill");
        icon.classList.add("text-neon-pink");
      } else {
        icon.classList.remove("ri-heart-fill");
        icon.classList.remove("text-neon-pink");
        icon.classList.add("ri-heart-line");
      }
    });
  });
});
