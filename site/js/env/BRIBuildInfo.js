'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-21 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1028';
    this._commitGIT = '0a74d5d9f65454cfeeaba3873d64fb85f53e94d9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}