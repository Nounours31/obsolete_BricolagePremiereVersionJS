'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-12 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1843';
    this._commitGIT = 'e8ae86a2b25ae502ed2f0fa1248f56626883d072';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}