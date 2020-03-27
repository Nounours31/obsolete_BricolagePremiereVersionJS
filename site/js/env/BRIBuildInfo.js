'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-27 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1170';
    this._commitGIT = '98250835a30d7c5b7d160f36b6949c77858ca929';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}