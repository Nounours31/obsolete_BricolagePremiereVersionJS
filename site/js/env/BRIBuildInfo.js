'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-08 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-2073';
    this._commitGIT = '0363e2186368cce113fe869b8274d775c870b773';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}