'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-29 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-2032';
    this._commitGIT = '923c4c58bacb34e08f9bece45eedbd5b70a4a477';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}