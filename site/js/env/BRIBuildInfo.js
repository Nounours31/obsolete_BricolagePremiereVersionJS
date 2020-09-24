'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-24 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1892';
    this._commitGIT = 'c7fbafd5204c6dd44b4bbe07b8cf34fd927c1310';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}