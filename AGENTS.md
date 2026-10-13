<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Website architecture
- Keep clinic facts and WhatsApp request generation in a shared browser-safe module so all appointment actions stay consistent.
- Use a shared website shell and separate TanStack content routes with individual metadata so navigation and search previews describe each page.
- Keep presentation tokens and reusable layout styles in the global stylesheet so the visual system remains consistent.
