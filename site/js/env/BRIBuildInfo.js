'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-08 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-853';
    this._commitGIT = '8f6e6abce4aae41b2f53cfaa46abc8f11d77b9cf';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}