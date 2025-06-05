# Custom SUI Connect Wallet UI Kit

An open-source UI kit designed specifically for SUI dApps, providing a customizable Connect Wallet button, modal, and menu to streamline the development of decentralized applications.

## 🚀 Features

- **Custom Connect Wallet Button**: Pre-styled, ready-to-use wallet connection button
- **Responsive Modal Design**: Clean modal interface for wallet selection
- **Customizable Components**: Easily modify styles to match your brand
- **TypeScript Support**: Full type safety for improved developer experience
- **Next.js Integration**: Built for the App Router architecture

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [@suiet/wallet-kit](https://kit.suiet.app/) - SUI wallet integration

## 🏁 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/lou1svuong/custom-connect-wallet-sui-kit.git
   cd custom-connect-wallet-sui-kit
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📚 Usage

### Setting Up the Wallet Provider

To use any of the wallet connection components, you need to wrap your application with the `WalletProviders` component:

```tsx
// In your layout.tsx or root component
import { WalletProviders } from "@/components/providers/wallet-provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WalletProviders>
          {/* Your app content */}
          {children}
        </WalletProviders>
      </body>
    </html>
  );
}
```

The `WalletProviders` component sets up:
- SUI network configurations (mainnet, testnet, devnet)
- Wallet connection state management
- React Query for data fetching

### Using the Connect Button

Import components directly in your Next.js project:

```tsx
import { ConnectWalletButton } from "@/components/connect-wallet/button";

export default function YourComponent() {
  return (
    <div>
      <ConnectWalletButton />
    </div>
  );
}
```

### Accessing Wallet State

You can access wallet connection state and methods using the hooks provided by `@suiet/wallet-kit`:

```tsx
import { useWallet } from "@suiet/wallet-kit";

function WalletInfo() {
  const { connected, account, signAndExecuteTransaction } = useWallet();
  
  if (connected && account) {
    return <div>Connected address: {account.address}</div>;
  }
  
  return <div>Wallet not connected</div>;
}
```

## 🔧 Customization

The UI kit is built with Tailwind CSS, making it easy to customize:

- Modify component styles in the respective component files
- Update the theme in your Tailwind config
- Add custom variants as needed

## 📄 License

This project is open-source and available under the MIT License.

## 👨‍💻 Author

Created by [Lou1s](https://github.com/Lou1sVuong)

## 🔗 Links

- [Live Demo](https://custom-connect-wallet-sui-kit.vercel.app)
