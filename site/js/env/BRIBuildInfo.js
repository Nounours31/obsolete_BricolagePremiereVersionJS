'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-08 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1336';
    this._commitGIT = '179d303a3fa6baa05fd5f3807756eea1dc99311b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}