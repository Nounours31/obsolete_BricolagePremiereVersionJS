'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-12 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-1721';
    this._commitGIT = '29524d84cc8a0626adbced3504199a2282ec8303';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}