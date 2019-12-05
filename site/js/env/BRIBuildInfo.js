'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-05 12:00:11';
    this._versionBuild = 'jenkins-Bricolage-716';
    this._commitGIT = '0e65d67031f456b0adcfb6ed914bc3e863bdbe30';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}