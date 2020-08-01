'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-01 08:00:09';
    this._versionBuild = 'jenkins-Bricolage-1675';
    this._commitGIT = 'bf4cae25a058ee89198db514ea7be87511a28c3c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}