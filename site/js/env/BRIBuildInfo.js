'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-29 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-2031';
    this._commitGIT = '670a5103318752b9f6b29a55f18c7f4116852753';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}