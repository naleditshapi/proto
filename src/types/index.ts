// Think of types as blueprints for your data
// They help TypeScript catch errors before runtime

// What types of sitting services can someone offer?
export enum SitterType {
  PET = "pet", // Just pets
  HOUSE = "house", // Just house
  BOTH = "both", // Both pets and house
}

// What role is the user playing?
export enum UserRole {
  REQUESTER = "requester", // "I need a sitter"
  SITTER = "sitter", // "I am a sitter"
}

// What does a listing look like?
export interface Listing {
  id: number; // Unique identifier
  creatorRoleId: number; // Who created this? (mock: 1)
  sitterType: SitterType; // What service needed?
  location: string; // Where?
  startDate: string; // When start? (ISO format: "2025-01-15")
  endDate: string; // When end?
  description: string; // Details about the job
  createdAt: string; // When was this posted?
}

// Navigation: What screens exist and what data do they need?
export type RootStackParamList = {
  RoleSelection: undefined; // No data needed
  RequesterHome: undefined;
  CreateListing: undefined;
  MyListings: undefined;
  EditListing: { listingId: number }; // Needs listing ID
  BrowseListings: undefined;
  ListingDetails: { listingId: number }; // Needs listing ID
  SavedListings: undefined;
  SitterHome: undefined;
};
