"use client";

import {
  CheckCircle,
  Envelope,
  FacebookLogo,
  ForkKnife,
  Gear,
  InstagramLogo,
  Package,
  Phone,
  ShoppingBag,
  ShoppingCart,
  Sparkle,
  Storefront,
  Truck,
  WhatsappLogo,
} from "@phosphor-icons/react";

const highlightIcons = {
  check: CheckCircle,
  truck: Truck,
  spark: Sparkle,
  gear: Gear,
  bag: ShoppingBag,
} as const;

const placeIcons = {
  bags: Package,
  dining: ForkKnife,
  cart: ShoppingCart,
  store: Storefront,
} as const;

export function HighlightIcon({ name }: { name: keyof typeof highlightIcons }) {
  const Icon = highlightIcons[name];
  return <Icon size={24} weight="regular" aria-hidden="true" />;
}

export function PlaceIcon({ name }: { name: keyof typeof placeIcons }) {
  const Icon = placeIcons[name];
  return <Icon size={48} weight="regular" aria-hidden="true" />;
}

export function WhatsappIcon({ size = 30 }: { size?: number }) {
  return <WhatsappLogo size={size} weight="regular" />;
}

export function PhoneIcon({ size = 30, weight = "regular" }: { size?: number; weight?: "regular" | "fill" }) {
  return <Phone size={size} weight={weight} />;
}

export function MailIcon({ size = 30, weight = "regular" }: { size?: number; weight?: "regular" | "fill" }) {
  return <Envelope size={size} weight={weight} />;
}

export function FacebookIcon({ size = 28 }: { size?: number }) {
  return <FacebookLogo size={size} weight="regular" />;
}

export function InstagramIcon({ size = 28 }: { size?: number }) {
  return <InstagramLogo size={size} weight="regular" />;
}
