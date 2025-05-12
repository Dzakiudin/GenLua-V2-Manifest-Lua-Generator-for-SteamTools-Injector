function checkUpdate() {
    const appID = document.getElementById('appID').value.trim();
    if (!appID) return alert("Masukkan AppID dulu!");
  
    const steamDBURL = `https://steamdb.info/app/${appID}/history`;
    window.open(steamDBURL, '_blank');
  
    document.getElementById('buildInfo').innerText =
      `🔎 Silakan cek SteamDB secara manual:\nhttps://steamdb.info/app/${appID}/history/`;
  }
  
  function downloadFares() {
    const appID = document.getElementById('appID').value.trim();
    if (!appID) return alert("Masukkan AppID dulu!");
    const url = `https://fares.top/${appID}.zip`;
  
    const a = document.createElement('a');
    a.href = url;
    a.download = `${appID}.zip`;
    a.click();
  }

  