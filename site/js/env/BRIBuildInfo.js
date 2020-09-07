'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-07 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1825';
    this._commitGIT = '51f438d595a1cc3e160f6cd3ed4e94a7e1022c57';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}