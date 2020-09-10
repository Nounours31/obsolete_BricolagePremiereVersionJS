'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-10 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1835';
    this._commitGIT = '4e7d443f934a77b4b5f6d0294dfd447fe69b2100';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}