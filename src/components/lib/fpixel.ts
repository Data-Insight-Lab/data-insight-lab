
type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[]
}

declare const window: WindowWithDataLayer

export const FACEBOOK_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

export const pageview = (url: string) => {
  if (typeof window.dataLayer !== "undefined") {
    window.dataLayer.push({
      event: "pageview",
      page: url,
    })
  } else {
    console.log({
      event: "pageview",
      page: url,
    })
  }
}