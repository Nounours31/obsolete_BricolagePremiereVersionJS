'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-29 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1911';
    this._commitGIT = '0878cc47a281dce276c3cb14ce506d22aaab8a5c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}