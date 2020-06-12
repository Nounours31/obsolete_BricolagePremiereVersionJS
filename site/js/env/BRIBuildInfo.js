'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-12 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1477';
    this._commitGIT = '3238d96ce7982246efc190623dc2e0f5c91cceed';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}