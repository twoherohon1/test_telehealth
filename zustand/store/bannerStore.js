import { create } from 'zustand';

export const useBannerStore = create((set) => ({
  bannerDataList: [
    {
      id: 1, // Add a unique identifier for each banner
      title: '',
      zone: 'Zone1',
      bannerType: 'Promotion',
      startDate: '',
      endDate: '',
      image: null,
      link: ''
    },
  ],

  // Set data for a specific banner by its ID
  setBannerData: (id, field, value) =>
    set((state) => ({
      bannerDataList: state.bannerDataList.map((banner) =>
        banner.id === id
          ? {
              ...banner,
              [field]: value,
            }
          : banner
      ),
    })),

  // Add a new banner to the list
  addNewBanner: () =>
    set((state) => ({
      bannerDataList: [
        ...state.bannerDataList,
        {
          id: Date.now(), // Generate unique ID based on timestamp
          title: '',
          zone: 'Zone1',
          bannerType: 'Promotion',
          startDate: '',
          endDate: '',
          image: null,
          link: ''
        },
      ],
    })),

  // Reset the banner list or a specific banner by its ID
  resetBanner: (id) =>
    set((state) => ({
      bannerDataList: state.bannerDataList.map((banner) =>
        banner.id === id
          ? {
              id: id, // Keep the same id
              title: '',
              zone: 'Zone1',
              bannerType: 'Promotion',
              startDate: '',
              endDate: '',
              image: null,
              link: ''
            }
          : banner
      ),
    })),

  // Remove a banner by its ID
  removeBanner: (id) =>
    set((state) => ({
      bannerDataList: state.bannerDataList.filter((banner) => banner.id !== id),
    })),
}));
