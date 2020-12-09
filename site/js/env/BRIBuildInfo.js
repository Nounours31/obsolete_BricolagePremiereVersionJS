'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-09 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-2197';
    this._commitGIT = 'bfaf0a73a0219518652e406ee6f28cd27dadd551';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}