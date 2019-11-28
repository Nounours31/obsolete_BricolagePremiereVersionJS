'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-28 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-687';
    this._commitGIT = 'aba0ac73359a275ee17e936bfc643f0e16d13076';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}