# Update Portfolio with New Games and Inline Video Player

## Summary
Add two new games (**Cozy Aquarium** and **Block Shadow**) and enable direct inline YouTube video playback on project cards across all games in Tan Ton's game developer portfolio.

## User Requirements
1. Add **Cozy Aquarium**:
   - Platform: Android (with Android Home-Screen Widget Companion)
   - Engine: Unity 6 URP 2.5D
   - Type: Relaxing Aquarium Simulation
   - Video: `https://www.youtube.com/watch?v=1OjEjT-ZhUI` (Landscape) & `https://www.youtube.com/shorts/eqyv4c6v3V4` (Shorts)
   - Images: `Cozy Aquarium (1).jpg`, `Cozy Aquarium (3).jpg`, `Cozy Aquarium.png`
2. Add **Block Shadow**:
   - Platform: Android
   - Engine: Unity
   - Type: 3D Spatial Puzzle / 2D Shadow Projection
   - Video: `https://www.youtube.com/shorts/FlbHUE2GbFc`
   - Images: `Block Shadow (1).jpg`, `Block Shadow (2).jpg`, `Block Shadow (3).jpg`
3. Update existing games with video links:
   - **REGNORA**: `https://www.youtube.com/watch?v=3vkK0JzA-W4`
   - **Zen Stack**: `https://www.youtube.com/shorts/YXVpHczVaEc`
4. **Direct Playback on Portfolio**:
   - Viewers can watch gameplay videos directly within the portfolio cards without leaving the site.
   - Converts standard YouTube and Shorts URLs into responsive embeds.

## Approaches Considered
- **Approach 1 (Chosen): Inline/In-Card Video Player & Media Switcher**
  - Keeps page load fast by loading YouTube embed only upon clicking Play / Watch Gameplay.
  - Automatically respects aspect ratio (16:9 for landscape, 9:16 for vertical shorts).
  - Keeps visitors on the portfolio page.
- **Approach 2: External links only**
  - Rejected because user explicitly requested in-portfolio viewing.
