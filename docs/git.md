
# A primer on Git

Git is a version control system (VCS) that allows you to track changes to files and collaborate with others.

While there is a lot to learn about Git, the following concepts are the most important to know for contributing to `dsa-ui`:

## :v: Branches

__Branches__ are used to isolate work. The `main` branch is a protected branch; it should contain only code ready to publish and deploy.
  
  To make changes, create a new __branch__ for your work. You will make __commits__ to this branch. When your changes are ready to be reviewed, open a __pull request__. It will be reviewed by a fellow dev. Once approved, you may __merge__ your branch into `main`.

  The following command creates a new branch called `my-name/feature`:

    ```sh
    git switch -c my-name/feature
    ```

## :pinching_hand: Commits

__Commits__ are the smallest unit of change. Ideally, each commit should be a single, logical change. For example, if you are adding a new component, you should have one commit for the component itself, and another for the storybook story.

  The following commands add all changes and new files to a commit with the message "Added new component":

    ```sh
    git add .
    git commit -m "Added new component"
    ```

## :pinched_fingers: Pull requests

__Pull requests__ are used to review changes for errors and areas of improvement. Once approved, they may be merged into `main`.

  The following commands pushes your branch to GitHub and opens a pull request:

    ```sh
    git push -u origin my-name/feature
    gh pr create
    ```

  Note that the second command requires the [GitHub CLI](https://cli.github.com/manual/installation) to be installed and authenticated. If you do not have it installed, you can open a pull request manually on GitHub.