'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-06 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1574';
    this._commitGIT = '66f4d28a0f77788c6814e4fb0fc998034f8945ea';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}