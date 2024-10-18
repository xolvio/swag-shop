# Running the Swag Shop locally

## Open the 💈SHOP💈

`./openTheShop` runs all subgraphs and a router via `rover dev` as well as the client react dev server, all using `concurrently`

<img width="1312" alt="image" src="https://github.com/user-attachments/assets/86dfb89b-0e26-4c7d-96d1-241cfacc8ef9">

https://github.com/user-attachments/assets/0c37b962-b154-4a62-a37c-82ee204a8a5c

## Troubleshooting

### No Router?

Altough the `openTheShop` command checks for the presence of a router binary and installs it for you if it doesnt exist, you may need to install one manually. To do so, download an Apollo Router binary and put it in the `./router` folder:

```bash
curl -sSL https://router.apollo.dev/download/nix/latest | sh
```

### Site looks blank on first load

React's dev server probably loaded before the supergraph+subgraphs were up. Hit reload and it should show up.
