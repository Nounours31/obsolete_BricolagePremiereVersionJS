'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-21 08:00:11';
    this._versionBuild = 'jenkins-Bricolage-167';
    this._commitGIT = '8a39c627aa03c0843f7d2724d739c72c2c9e3b49';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}