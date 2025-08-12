export const checkIsIOS = (): boolean => {
  const platform = navigator.platform;
  const ua = navigator.userAgent;
  const maxTouch = (navigator as any).maxTouchPoints;

  return (
    /iPad|iPhone|iPod/.test(ua) ||
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(platform) ||
    (platform === "MacIntel" && maxTouch > 1)
  );
};

export const checkIsAndroid = () => /(android)/i.test(navigator.userAgent);

export const checkIsStandalone = (): boolean =>
  window.matchMedia("(display-mode: standalone)").matches ||
  document.referrer.startsWith("android-app://");
